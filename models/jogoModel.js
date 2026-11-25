
export const jogos = [
    { idjogo: 1, nomejogo: 'GTA VI', fabricante: 'RockStar', idademin: 18, anolanc: 2026 },
    { idjogo: 2, nomejogo: 'Minecraft', fabricante: 'Mojang', idademin: 10, anolanc: 2011 },
    { idjogo: 3, nomejogo: 'The Last of Us Part II', fabricante: 'Naughty Dog', idademin: 18, anolanc: 2020 },
    { idjogo: 4, nomejogo: 'God of War Ragnarök', fabricante: 'Santa Monica Studio', idademin: 18, anolanc: 2022 },
    { idjogo: 5, nomejogo: 'EA Sports FC 26', fabricante: 'EA Sports', idademin: 10, anolanc: 2025 }
];


export const listarTodos = () => {
    return jogos;
};

export const buscarPorFabricante = (fabricante) => {
    return jogos.filter(
        j => j.fabricante.toLowerCase() === fabricante.toLowerCase()
    );
};


export const buscarPorAno = (ano) => {
    return jogos.filter(j => j.anolanc === ano);
};


export const buscarPorId = (id) => {
    return jogos.find(j => j.idjogo === id);
};


export const criar = ({ nomejogo, fabricante, idademin, anolanc }) => {

    const jogoExistente = jogos.find(
        j => j.nomejogo.toLowerCase() === nomejogo.trim().toLowerCase()
    );

    if (jogoExistente) {
        return null;
    }

    const novoJogo = {
        idjogo: Math.max(0, ...jogos.map(j => j.idjogo)) + 1,
        nomejogo,
        fabricante,
        idademin: parseInt(idademin),
        anolanc: parseInt(anolanc)
    };

    jogos.push(novoJogo);
    return novoJogo;
};


export const atualizar = (id, { nomejogo, fabricante, idademin, anolanc }) => {
    const index = jogos.findIndex(j => j.idjogo === id);

    if (index === -1) return null;

    jogos[index] = {
        idjogo: id,
        nomejogo,
        fabricante,
        idademin: parseInt(idademin),
        anolanc: parseInt(anolanc)
    };

    return jogos[index];
};


export const remover = (id) => {
    const index = jogos.findIndex(j => j.idjogo === id);

    if (index === -1) return null;

    const [jogoRemovido] = jogos.splice(index, 1);

    return jogoRemovido;
};