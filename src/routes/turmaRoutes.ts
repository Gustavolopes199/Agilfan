import { Router } from 'express';
import TurmaController from '../controllers/TurmaController';

const router = Router();

router.get('/', TurmaController.listarTurmas);
router.get('/:idTurma', TurmaController.obterTurma);
router.post('/', TurmaController.criarTurma);
router.put('/:idTurma', TurmaController.atualizarTurma);
router.delete('/:idTurma', TurmaController.deletarTurma);

export default router;
