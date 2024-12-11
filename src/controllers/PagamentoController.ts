import { Request, Response, RequestHandler } from 'express';
import PagamentoService from '../services/PagamentoService';

class PagamentoController {
  static listarPagamentos: RequestHandler = async (req, res) => {
    try {
      const pagamentos = await PagamentoService.listarPagamentos();
      res.json(pagamentos);
    } catch (error: any) {
      res.status(500).json({ mensagem: 'Erro ao listar pagamentos', error: error.message });
    }
  };

  static obterPagamento: RequestHandler = async (req, res) => {
    try {
      const { idPagamento } = req.params;
      const pagamento = await PagamentoService.obterPagamento(idPagamento);
      if (!pagamento) {
        res.status(404).json({ mensagem: 'Pagamento não encontrado' });
        return; // Retorna após enviar a resposta de erro
      }
      res.json(pagamento);
    } catch (error: any) {
      res.status(500).json({ mensagem: 'Erro ao obter pagamento', error: error.message });
    }
  };

  static criarPagamento: RequestHandler = async (req, res) => {
    try {
      const pagamento = await PagamentoService.criarPagamento(req.body);
      res.status(201).json(pagamento);
    } catch (error: any) {
      res.status(400).json({ mensagem: error.message });
    }
  };

  static atualizarPagamento: RequestHandler = async (req, res) => {
    try {
      const { idPagamento } = req.params;
      const pagamentoAtualizado = await PagamentoService.atualizarPagamento(idPagamento, req.body);
      if (!pagamentoAtualizado) {
        res.status(404).json({ mensagem: 'Pagamento não encontrado' });
        return; // Retorna após enviar a resposta de erro
      }
      res.json(pagamentoAtualizado);
    } catch (error: any) {
      res.status(400).json({ mensagem: error.message });
    }
  };

  static deletarPagamento: RequestHandler = async (req, res) => {
    try {
      const { idPagamento } = req.params;
      const sucesso = await PagamentoService.deletarPagamento(idPagamento);
      if (!sucesso) {
        res.status(404).json({ mensagem: 'Pagamento não encontrado' });
        return; // Retorna após enviar a resposta de erro
      }
      res.status(204).send();
    } catch (error: any) {
      res.status(500).json({ mensagem: 'Erro ao deletar pagamento', error: error.message });
    }
  };
}

export default PagamentoController;
