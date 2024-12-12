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
const Turma_1 = require("../entity/Turma");
class TurmaService {
    constructor() {
        this.turmaRepository = data_source_1.AppDataSource.getRepository(Turma_1.Turma);
    }
    listarTurmas() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.turmaRepository.find();
        });
    }
    obterTurma(idTurma) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.turmaRepository.findOneBy({ idTurma });
        });
    }
    criarTurma(dados) {
        return __awaiter(this, void 0, void 0, function* () {
            const turmaExistente = yield this.turmaRepository.findOneBy({ idTurma: dados.idTurma });
            if (turmaExistente) {
                throw new Error('Turma já existe com este ID.');
            }
            const novaTurma = this.turmaRepository.create(dados);
            return this.turmaRepository.save(novaTurma);
        });
    }
    atualizarTurma(idTurma, dados) {
        return __awaiter(this, void 0, void 0, function* () {
            const turmaExistente = yield this.turmaRepository.findOneBy({ idTurma });
            if (!turmaExistente) {
                return null;
            }
            Object.assign(turmaExistente, dados);
            return this.turmaRepository.save(turmaExistente);
        });
    }
    deletarTurma(idTurma) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield this.turmaRepository.delete({ idTurma });
            return resultado.affected !== 0;
        });
    }
}
exports.default = new TurmaService();
