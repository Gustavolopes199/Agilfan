import { Router } from 'express';
import TurmaController from '../controllers/TurmaController';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Turmas
 *   description: Endpoints relacionados às turmas
 */

/**
 * @swagger
 * /turma:
 *   get:
 *     summary: Lista todas as turmas
 *     tags: [Turmas]
 *     responses:
 *       200:
 *         description: Lista de turmas retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   idTurma:
 *                     type: string
 *                     description: ID da turma
 *                   nome:
 *                     type: string
 *                     description: Nome da turma
 *                   descricao:
 *                     type: string
 *                     description: Descrição da turma
 */
router.get('/', TurmaController.listarTurmas);

/**
 * @swagger
 * /turma/{idTurma}:
 *   get:
 *     summary: Busca uma turma pelo ID
 *     tags: [Turmas]
 *     parameters:
 *       - in: path
 *         name: idTurma
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da turma
 *     responses:
 *       200:
 *         description: Detalhes da turma retornados com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 idTurma:
 *                   type: string
 *                   description: ID da turma
 *                 nome:
 *                   type: string
 *                   description: Nome da turma
 *                 descricao:
 *                   type: string
 *                   description: Descrição da turma
 *       404:
 *         description: Turma não encontrada
 */
router.get('/:idTurma', TurmaController.obterTurma);

/**
 * @swagger
 * /turma:
 *   post:
 *     summary: Cria uma nova turma
 *     tags: [Turmas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 description: Nome da turma
 *               descricao:
 *                 type: string
 *                 description: Descrição da turma
 *     responses:
 *       201:
 *         description: Turma criada com sucesso
 */
router.post('/', TurmaController.criarTurma);

/**
 * @swagger
 * /turma/{idTurma}:
 *   put:
 *     summary: Atualiza os detalhes de uma turma
 *     tags: [Turmas]
 *     parameters:
 *       - in: path
 *         name: idTurma
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da turma a ser atualizada
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 description: Novo nome da turma
 *               descricao:
 *                 type: string
 *                 description: Nova descrição da turma
 *     responses:
 *       200:
 *         description: Turma atualizada com sucesso
 *       404:
 *         description: Turma não encontrada
 */
router.put('/:idTurma', TurmaController.atualizarTurma);

/**
 * @swagger
 * /turma/{idTurma}:
 *   delete:
 *     summary: Exclui uma turma pelo ID
 *     tags: [Turmas]
 *     parameters:
 *       - in: path
 *         name: idTurma
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da turma a ser excluída
 *     responses:
 *       204:
 *         description: Turma excluída com sucesso
 *       404:
 *         description: Turma não encontrada
 */
router.delete('/:idTurma', TurmaController.deletarTurma);

export default router;
