"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const usuarioRoutes_1 = __importDefault(require("./routes/usuarioRoutes"));
const pagamentosRoutes_1 = __importDefault(require("./routes/pagamentosRoutes"));
const turmaRoutes_1 = __importDefault(require("./routes/turmaRoutes"));
const data_source_1 = require("./data-source");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/users', usuarioRoutes_1.default);
app.use('/pagamentos', pagamentosRoutes_1.default);
app.use('/turma', turmaRoutes_1.default);
const PORT = process.env.PORT || 3001;
data_source_1.AppDataSource.initialize().then();
console.log("Banco conectado");
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
