import { Router } from 'express';
import UsuarioController from '../controllers/UsuarioController';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Usuários
 *   description: Endpoints relacionados aos usuários
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Lista todos os usuários
 *     tags: [Usuários]
 *     responses:
 *       200:
 *         description: Lista de usuários retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   matricula:
 *                     type: string
 *                     description: Matrícula do usuário
 *                   nome:
 *                     type: string
 *                     description: Nome do usuário
 *                   email:
 *                     type: string
 *                     description: Email do usuário
 */
router.get('/', UsuarioController.listarUsuarios);

/**
 * @swagger
 * /users/{matricula}:
 *   get:
 *     summary: Busca um usuário pela matrícula
 *     tags: [Usuários]
 *     parameters:
 *       - in: path
 *         name: matricula
 *         required: true
 *         schema:
 *           type: string
 *         description: Matrícula do usuário
 *     responses:
 *       200:
 *         description: Detalhes do usuário retornados com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 matricula:
 *                   type: string
 *                   description: Matrícula do usuário
 *                 nome:
 *                   type: string
 *                   description: Nome do usuário
 *                 email:
 *                   type: string
 *                   description: Email do usuário
 *       404:
 *         description: Usuário não encontrado
 */
router.get('/:matricula', UsuarioController.obterUsuario);

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [Usuários]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               matricula:
 *                 type: string
 *                 description: Matrícula do usuário
 *               nome:
 *                 type: string
 *                 description: Nome do usuário
 *               email:
 *                 type: string
 *                 description: Email do usuário
 *               password:
 *                 type: string
 *                 description: Senha do usuário
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 */
router.post('/', UsuarioController.criarUsuario);

/**
 * @swagger
 * /users/{matricula}:
 *   put:
 *     summary: Atualiza os detalhes de um usuário
 *     tags: [Usuários]
 *     parameters:
 *       - in: path
 *         name: matricula
 *         required: true
 *         schema:
 *           type: string
 *         description: Matrícula do usuário a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 description: Novo nome do usuário
 *               email:
 *                 type: string
 *                 description: Novo email do usuário
 *               password:
 *                 type: string
 *                 description: Nova senha do usuário
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 *       404:
 *         description: Usuário não encontrado
 */
router.put('/:matricula', UsuarioController.atualizarUsuario);

/**
 * @swagger
 * /users/{matricula}:
 *   delete:
 *     summary: Exclui um usuário pela matrícula
 *     tags: [Usuários]
 *     parameters:
 *       - in: path
 *         name: matricula
 *         required: true
 *         schema:
 *           type: string
 *         description: Matrícula do usuário a ser excluído
 *     responses:
 *       204:
 *         description: Usuário excluído com sucesso
 *       404:
 *         description: Usuário não encontrado
 */
router.delete('/:matricula', UsuarioController.deletarUsuario);

export default router;
