"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsuarioController_1 = __importDefault(require("../controllers/UsuarioController"));
const router = (0, express_1.Router)();
router.get('/', UsuarioController_1.default.listarUsuarios);
router.get('/:matricula', UsuarioController_1.default.obterUsuario);
router.put('/:matricula', UsuarioController_1.default.atualizarUsuario);
router.delete('/:matricula', UsuarioController_1.default.deletarUsuario);
router.post('/', UsuarioController_1.default.criarUsuario);
exports.default = router;
