import { Router } from 'express';
import UsuarioController from '../controllers/UsuarioController';

const router = Router();

router.get('/', UsuarioController.listarUsuarios);
router.get('/:matricula', UsuarioController.obterUsuario);
router.post('/', UsuarioController.criarUsuario);
router.put('/:matricula', UsuarioController.atualizarUsuario);
router.delete('/:matricula', UsuarioController.deletarUsuario);

export default router;
