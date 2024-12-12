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
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const Pagamento_1 = require("../entity/Pagamento");
class PagamentoService {
    constructor() {
        this.pagamentoRepository = data_source_1.AppDataSource.getRepository(Pagamento_1.Pagamento);
    }
    listarPagamentos() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.pagamentoRepository.find({ relations: ['usuario', 'turma'] });
        });
    }
    obterPagamento(idPagamento) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.pagamentoRepository.findOne({
                where: { idPagamento },
                relations: ['usuario', 'turma'],
            });
        });
    }
    criarPagamento(dados) {
        return __awaiter(this, void 0, void 0, function* () {
            const pagamentoExistente = yield this.pagamentoRepository.findOneBy({ idPagamento: dados.idPagamento });
            if (pagamentoExistente) {
                throw new Error('Pagamento já existe com este ID.');
            }
            const novoPagamento = this.pagamentoRepository.create(dados);
            return this.pagamentoRepository.save(novoPagamento);
        });
    }
    atualizarPagamento(idPagamento, dados) {
        return __awaiter(this, void 0, void 0, function* () {
            const pagamentoExistente = yield this.pagamentoRepository.findOneBy({ idPagamento });
            if (!pagamentoExistente) {
                return null;
            }
            Object.assign(pagamentoExistente, dados);
            return this.pagamentoRepository.save(pagamentoExistente);
        });
    }
    deletarPagamento(idPagamento) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield this.pagamentoRepository.delete({ idPagamento });
            return resultado.affected !== 0;
        });
    }
}
exports.default = new PagamentoService();
