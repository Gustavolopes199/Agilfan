import { Request, Response, RequestHandler } from 'express';
import UsuarioService from '../services/UsuarioService';

class UsuarioController {
   listarUsuarios: RequestHandler = async (req, res) => {
    try {
      const usuarios = await UsuarioService.listarUsuarios();
      res.json(usuarios);
    } catch (error: any) {
      res.status(500).json({ mensagem: 'Erro ao listar usuários', error: error.message });
    }
  };

   obterUsuario: RequestHandler = async (req, res) => {
    try {
      const { matricula } = req.params;
      const usuario = await UsuarioService.obterUsuario(matricula);
      if (!usuario) {
        res.status(404).json({ mensagem: 'Usuário não encontrado' });
        return; 
      }
      res.json(usuario);
    } catch (error: any) {
      res.status(500).json({ mensagem: 'Erro ao obter usuário', error: error.message });
    }
  };

   criarUsuario: RequestHandler = async (req, res) => {
    try {
      const usuario = await UsuarioService.criarUsuario(req.body);
      res.status(201).json(usuario);
    } catch (error: any) {
      res.status(400).json({ mensagem: error.message });
    }
  };

   atualizarUsuario: RequestHandler = async (req, res) => {
    try {
      const { matricula } = req.params;
      const usuarioAtualizado = await UsuarioService.atualizarUsuario(matricula, req.body);
      if (!usuarioAtualizado) {
        res.status(404).json({ mensagem: 'Usuário não encontrado' });
        return; 
      }
      res.json(usuarioAtualizado);
    } catch (error: any) {
      res.status(400).json({ mensagem: error.message });
    }
  };

   deletarUsuario: RequestHandler = async (req, res) => {
    try {
      const { matricula } = req.params;
      const sucesso = await UsuarioService.deletarUsuario(matricula);
      if (!sucesso) {
        res.status(404).json({ mensagem: 'Usuário não encontrado' });
        return; 
      }
      res.status(204).send();
    } catch (error: any) {
      res.status(500).json({ mensagem: 'Erro ao deletar usuário', error: error.message });
    }
  };
}


export default UsuarioController;
