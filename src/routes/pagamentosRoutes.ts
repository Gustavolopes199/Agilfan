import { Router } from 'express';
import PagamentoController from '../controllers/PagamentoController';

const router = Router();

router.get('/', PagamentoController.listarPagamentos);
router.get('/:idPagamento', PagamentoController.obterPagamento);
router.post('/', PagamentoController.criarPagamento);
router.put('/:idPagamento', PagamentoController.atualizarPagamento);
router.delete('/:idPagamento', PagamentoController.deletarPagamento);

export default router;
