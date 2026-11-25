
import {
    listarTodos,
    buscarPorFabricante,
    buscarPorAno,
    buscarPorId,
    criar,
    atualizar,
    remover
} from '../models/jogoModel.js';

export const buscarJogos = (req, res) => {
    const jogos = listarTodos();

    res.status(200).json(jogos);
};

export const buscarJogosPorFabricante = (req, res) => {
    const fabricante = req.params.fabricante.trim();

    const jogosFabricante = buscarPorFabricante(fabricante);

    if (jogosFabricante.length > 0) {
        res.status(200).json(jogosFabricante);
    } else {
        res.status(404).json({
            mensagem: `Nenhum jogo encontrado para o fabricante ${fabricante}`
        });
    }
};

export const buscarJogosPorAno = (req, res) => {
    const ano = parseInt(req.params.ano);

    const jogosAno = buscarPorAno(ano);

    if (jogosAno.length > 0) {
        res.status(200).json(jogosAno);
    } else {
        res.status(404).json({
            mensagem: `Nenhum jogo encontrado no ano ${ano}`
        });
    }
};

export const buscarJogoPorId = (req, res) => {
    const id = parseInt(req.params.id);

    const jogo = buscarPorId(id);

    if (jogo) {
        res.status(200).json(jogo);
    } else {
        res.status(404).json({
            mensagem: `Jogo ${id} não encontrado`
        });
    }
};

export const adicionarJogo = (req, res) => {
    const { nomejogo, fabricante, idademin, anolanc } = req.body;

    if (!nomejogo || !fabricante || idademin === undefined || anolanc === undefined) {
        return res.status(400).json({
            mensagem: 'Todos os campos (nomejogo, fabricante, idademin, anolanc) são obrigatórios.'
        });
    }

    const novoJogo = criar({
        nomejogo,
        fabricante,
        idademin,
        anolanc
    });

    if (!novoJogo) {
    return res.status(409).json({
        mensagem: 'Esse jogo já está cadastrado!'
    });
}

res.status(201).json(novoJogo);
};

export const alterarJogo = (req, res) => {
    const id = parseInt(req.params.id);

    const { nomejogo, fabricante, idademin, anolanc } = req.body;

    if (!nomejogo || !fabricante || idademin === undefined || anolanc === undefined) {
        return res.status(400).json({
            mensagem: 'Todos os campos (nomejogo, fabricante, idademin, anolanc) devem ser informados.'
        });
    }

    const jogoAtualizado = atualizar(id, {
        nomejogo,
        fabricante,
        idademin,
        anolanc
    });

    if (!jogoAtualizado) {
        return res.status(404).json({
            mensagem: `Jogo com ID ${id} não encontrado para atualização.`
        });
    }

    res.status(200).json(jogoAtualizado);
};

export const deleteJogo = (req, res) => {
    const id = parseInt(req.params.id);

    const jogoRemovido = remover(id);

    if (!jogoRemovido) {
        return res.status(404).json({
            mensagem: `Jogo com ID ${id} não encontrado para exclusão.`
        });
    }

    res.status(200).json({
        mensagem: `Jogo com ID ${id} removido com sucesso.`,
        jogo: jogoRemovido
    });
};
