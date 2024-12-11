import { Router } from 'express';
import PagamentoController from '../controllers/PagamentoController';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Pagamentos
 *   description: Endpoints relacionados a pagamentos
 */

/**
 * @swagger
 * /pagamentos:
 *   get:
 *     summary: Lista todos os pagamentos
 *     tags: [Pagamentos]
 *     responses:
 *       200:
 *         description: Lista de pagamentos retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   idPagamento:
 *                     type: string
 *                     description: ID do pagamento
 *                   valor:
 *                     type: number
 *                     description: Valor do pagamento
 *                   data:
 *                     type: string
 *                     format: date
 *                     description: Data do pagamento
 */
router.get('/', PagamentoController.listarPagamentos);

/**
 * @swagger
 * /pagamentos/{idPagamento}:
 *   get:
 *     summary: Busca um pagamento pelo ID
 *     tags: [Pagamentos]
 *     parameters:
 *       - in: path
 *         name: idPagamento
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do pagamento
 *     responses:
 *       200:
 *         description: Detalhes do pagamento retornados com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 idPagamento:
 *                   type: string
 *                   description: ID do pagamento
 *                 valor:
 *                   type: number
 *                   description: Valor do pagamento
 *                 data:
 *                   type: string
 *                   format: date
 *                   description: Data do pagamento
 *       404:
 *         description: Pagamento não encontrado
 */
router.get('/:idPagamento', PagamentoController.obterPagamento);

/**
 * @swagger
 * /pagamentos:
 *   post:
 *     summary: Cria um novo pagamento
 *     tags: [Pagamentos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               valor:
 *                 type: number
 *                 description: Valor do pagamento
 *               data:
 *                 type: string
 *                 format: date
 *                 description: Data do pagamento
 *     responses:
 *       201:
 *         description: Pagamento criado com sucesso
 */
router.post('/', PagamentoController.criarPagamento);

/**
 * @swagger
 * /pagamentos/{idPagamento}:
 *   put:
 *     summary: Atualiza os detalhes de um pagamento
 *     tags: [Pagamentos]
 *     parameters:
 *       - in: path
 *         name: idPagamento
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do pagamento a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               valor:
 *                 type: number
 *                 description: Novo valor do pagamento
 *               data:
 *                 type: string
 *                 format: date
 *                 description: Nova data do pagamento
 *     responses:
 *       200:
 *         description: Pagamento atualizado com sucesso
 *       404:
 *         description: Pagamento não encontrado
 */
router.put('/:idPagamento', PagamentoController.atualizarPagamento);

/**
 * @swagger
 * /pagamentos/{idPagamento}:
 *   delete:
 *     summary: Exclui um pagamento pelo ID
 *     tags: [Pagamentos]
 *     parameters:
 *       - in: path
 *         name: idPagamento
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do pagamento a ser excluído
 *     responses:
 *       204:
 *         description: Pagamento excluído com sucesso
 *       404:
 *         description: Pagamento não encontrado
 */
router.delete('/:idPagamento', PagamentoController.deletarPagamento);

export default router;
