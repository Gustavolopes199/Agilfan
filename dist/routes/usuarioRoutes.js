"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsuarioController_1 = __importDefault(require("../controllers/UsuarioController"));
const router = (0, express_1.Router)();
const usuarioController = new UsuarioController_1.default();
router.get('/', usuarioController.listarUsuarios);
router.get('/:matricula', usuarioController.obterUsuario);
router.post('/', usuarioController.criarUsuario);
router.put('/:matricula', usuarioController.atualizarUsuario);
router.delete('/:matricula', usuarioController.deletarUsuario);
exports.default = router;
