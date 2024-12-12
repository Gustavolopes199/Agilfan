"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TurmaController_1 = __importDefault(require("../controllers/TurmaController"));
const router = (0, express_1.Router)();
router.get('/', TurmaController_1.default.listarTurmas);
router.get('/:idTurma', TurmaController_1.default.obterTurma);
router.post('/', TurmaController_1.default.criarTurma);
router.put('/:idTurma', TurmaController_1.default.atualizarTurma);
router.delete('/:idTurma', TurmaController_1.default.deletarTurma);
exports.default = router;
