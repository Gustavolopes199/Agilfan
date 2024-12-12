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
Object.defineProperty(exports, "__esModule", { value: true });
const UsuarioService_1 = __importDefault(require("../services/UsuarioService"));
class UsuarioController {
    constructor() {
        this.listarUsuarios = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const usuarios = yield UsuarioService_1.default.listarUsuarios();
                res.json(usuarios);
            }
            catch (error) {
                res.status(500).json({ mensagem: 'Erro ao listar usuários', error: error.message });
            }
        });
        this.obterUsuario = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { matricula } = req.params;
                const usuario = yield UsuarioService_1.default.obterUsuario(matricula);
                if (!usuario) {
                    res.status(404).json({ mensagem: 'Usuário não encontrado' });
                    return;
                }
                res.json(usuario);
            }
            catch (error) {
                res.status(500).json({ mensagem: 'Erro ao obter usuário', error: error.message });
            }
        });
        this.criarUsuario = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const usuario = yield UsuarioService_1.default.criarUsuario(req.body);
                res.status(201).json(usuario);
            }
            catch (error) {
                res.status(400).json({ mensagem: error.message });
            }
        });
        this.atualizarUsuario = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { matricula } = req.params;
                const usuarioAtualizado = yield UsuarioService_1.default.atualizarUsuario(matricula, req.body);
                if (!usuarioAtualizado) {
                    res.status(404).json({ mensagem: 'Usuário não encontrado' });
                    return;
                }
                res.json(usuarioAtualizado);
            }
            catch (error) {
                res.status(400).json({ mensagem: error.message });
            }
        });
        this.deletarUsuario = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { matricula } = req.params;
                const sucesso = yield UsuarioService_1.default.deletarUsuario(matricula);
                if (!sucesso) {
                    res.status(404).json({ mensagem: 'Usuário não encontrado' });
                    return;
                }
                res.status(204).send();
            }
            catch (error) {
                res.status(500).json({ mensagem: 'Erro ao deletar usuário', error: error.message });
            }
        });
    }
}
exports.default = UsuarioController;
