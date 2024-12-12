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
const TurmaService_1 = __importDefault(require("../services/TurmaService"));
class TurmaController {
}
_a = TurmaController;
TurmaController.listarTurmas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const turmas = yield TurmaService_1.default.listarTurmas();
        res.json(turmas);
    }
    catch (error) {
        res.status(500).json({ mensagem: 'Erro ao listar turmas', error: error.message });
    }
});
TurmaController.obterTurma = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { idTurma } = req.params;
        const turma = yield TurmaService_1.default.obterTurma(idTurma);
        if (!turma) {
            res.status(404).json({ mensagem: 'Turma não encontrada' });
            return;
        }
        res.json(turma);
    }
    catch (error) {
        res.status(500).json({ mensagem: 'Erro ao obter turma', error: error.message });
    }
});
TurmaController.criarTurma = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const turma = yield TurmaService_1.default.criarTurma(req.body);
        res.status(201).json(turma);
    }
    catch (error) {
        res.status(400).json({ mensagem: error.message });
    }
});
TurmaController.atualizarTurma = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { idTurma } = req.params;
        const turmaAtualizada = yield TurmaService_1.default.atualizarTurma(idTurma, req.body);
        if (!turmaAtualizada) {
            res.status(404).json({ mensagem: 'Turma não encontrada' });
            return;
        }
        res.json(turmaAtualizada);
    }
    catch (error) {
        res.status(400).json({ mensagem: error.message });
    }
});
TurmaController.deletarTurma = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { idTurma } = req.params;
        const sucesso = yield TurmaService_1.default.deletarTurma(idTurma);
        if (!sucesso) {
            res.status(404).json({ mensagem: 'Turma não encontrada' });
            return;
        }
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ mensagem: 'Erro ao deletar turma', error: error.message });
    }
});
exports.default = TurmaController;
