import { Router } from 'express';
import UsuarioController from '../controllers/UsuarioController';

const router = Router();

const usuarioController = new UsuarioController();

router.get('/', usuarioController.listarUsuarios);
router.get('/:matricula', usuarioController.obterUsuario);
router.post('/', usuarioController.criarUsuario);
router.put('/:matricula', usuarioController.atualizarUsuario);
router.delete('/:matricula', usuarioController.deletarUsuario);

export default router;
