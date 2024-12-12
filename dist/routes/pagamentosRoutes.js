"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PagamentoController_1 = __importDefault(require("../controllers/PagamentoController"));
const router = (0, express_1.Router)();
router.get('/', PagamentoController_1.default.listarPagamentos);
router.get('/:idPagamento', PagamentoController_1.default.obterPagamento);
router.post('/', PagamentoController_1.default.criarPagamento);
router.put('/:idPagamento', PagamentoController_1.default.atualizarPagamento);
router.delete('/:idPagamento', PagamentoController_1.default.deletarPagamento);
exports.default = router;
