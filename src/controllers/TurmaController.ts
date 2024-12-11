import { Request, Response, RequestHandler } from 'express';
import TurmaService from '../services/TurmaService';

class TurmaController { 
  static listarTurmas: RequestHandler = async (req, res) => {
    try {
      const turmas = await TurmaService.listarTurmas();
      res.json(turmas);
    } catch (error: any) {
      res.status(500).json({ mensagem: 'Erro ao listar turmas', error: error.message });
    }
  };

  static obterTurma: RequestHandler = async (req, res) => {
    try {
      const { idTurma } = req.params;
      const turma = await TurmaService.obterTurma(idTurma);
      if (!turma) {
        res.status(404).json({ mensagem: 'Turma não encontrada' });
        return; 
      }
      res.json(turma);
    } catch (error: any) {
      res.status(500).json({ mensagem: 'Erro ao obter turma', error: error.message });
    }
  };

  static criarTurma: RequestHandler = async (req, res) => {
    try {
      const turma = await TurmaService.criarTurma(req.body);
      res.status(201).json(turma);
    } catch (error: any) {
      res.status(400).json({ mensagem: error.message });
    }
  };

  static atualizarTurma: RequestHandler = async (req, res) => {
    try {
      const { idTurma } = req.params;
      const turmaAtualizada = await TurmaService.atualizarTurma(idTurma, req.body);
      if (!turmaAtualizada) {
        res.status(404).json({ mensagem: 'Turma não encontrada' });
        return; 
      }
      res.json(turmaAtualizada);
    } catch (error: any) {
      res.status(400).json({ mensagem: error.message });
    }
  };

  static deletarTurma: RequestHandler = async (req, res) => {
    try {
      const { idTurma } = req.params;
      const sucesso = await TurmaService.deletarTurma(idTurma);
      if (!sucesso) {
        res.status(404).json({ mensagem: 'Turma não encontrada' });
        return; 
      }
      res.status(204).send();
    } catch (error: any) {
      res.status(500).json({ mensagem: 'Erro ao deletar turma', error: error.message });
    }
  };
}

export default TurmaController;
