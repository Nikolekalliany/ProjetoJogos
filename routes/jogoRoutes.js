import { Router } from 'express';

import {
    buscarJogos,
    buscarJogosPorFabricante,
    buscarJogosPorAno,
    buscarJogoPorId,
    adicionarJogo,
    alterarJogo,
    deleteJogo
} from '../controllers/jogoController.js';

const router = Router();


router.get('/', buscarJogos);
router.get('/fabricante/:fabricante', buscarJogosPorFabricante);
router.get('/ano/:ano', buscarJogosPorAno);
router.get('/:id', buscarJogoPorId);


router.post('/', adicionarJogo);


router.put('/:id', alterarJogo);


router.delete('/:id', deleteJogo);

export default router;