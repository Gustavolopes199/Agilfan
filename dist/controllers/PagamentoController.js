"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const PagamentoService_1 = __importDefault(require("../services/PagamentoService"));
class PagamentoController {
}
_a = PagamentoController;
PagamentoController.listarPagamentos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pagamentos = yield PagamentoService_1.default.listarPagamentos();
        res.json(pagamentos);
    }
    catch (error) {
        res.status(500).json({ mensagem: 'Erro ao listar pagamentos', error: error.message });
    }
});
PagamentoController.obterPagamento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { idPagamento } = req.params;
        const pagamento = yield PagamentoService_1.default.obterPagamento(idPagamento);
        if (!pagamento) {
            res.status(404).json({ mensagem: 'Pagamento não encontrado' });
            return;
        }
        res.json(pagamento);
    }
    catch (error) {
        res.status(500).json({ mensagem: 'Erro ao obter pagamento', error: error.message });
    }
});
PagamentoController.criarPagamento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pagamento = yield PagamentoService_1.default.criarPagamento(req.body);
        res.status(201).json(pagamento);
    }
    catch (error) {
        res.status(400).json({ mensagem: error.message });
    }
});
PagamentoController.atualizarPagamento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { idPagamento } = req.params;
        const pagamentoAtualizado = yield PagamentoService_1.default.atualizarPagamento(idPagamento, req.body);
        if (!pagamentoAtualizado) {
            res.status(404).json({ mensagem: 'Pagamento não encontrado' });
            return;
        }
        res.json(pagamentoAtualizado);
    }
    catch (error) {
        res.status(400).json({ mensagem: error.message });
    }
});
PagamentoController.deletarPagamento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { idPagamento } = req.params;
        const sucesso = yield PagamentoService_1.default.deletarPagamento(idPagamento);
        if (!sucesso) {
            res.status(404).json({ mensagem: 'Pagamento não encontrado' });
            return;
        }
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ mensagem: 'Erro ao deletar pagamento', error: error.message });
    }
});
exports.default = PagamentoController;
