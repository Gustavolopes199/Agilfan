import { Router } from 'express';
import UsuarioController from '../controllers/UsuarioController';

const router = Router();

router.get('/', UsuarioController.listarUsuarios);
router.get('/:matricula', UsuarioController.obterUsuario);
router.put('/:matricula', UsuarioController.atualizarUsuario);
router.delete('/:matricula', UsuarioController.deletarUsuario);
router.post('/', UsuarioController.criarUsuario);

export default router;
