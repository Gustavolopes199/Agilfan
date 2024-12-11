"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Turma_1 = require("./entity/Turma");
const Pagamento_1 = require("./entity/Pagamento");
const Usuario_1 = require("./entity/Usuario");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'dpg-ctcf2ea3esus73bf0030-a.oregon-postgres.render.com',
    port: 5432,
    username: 'agilfan',
    password: '26X7ZYDcOqizx0VB7k7WmQEGoyBLyrwc',
    database: 'agilfan',
    synchronize: true,
    logging: false,
    entities: [Usuario_1.Usuario, Turma_1.Turma, Pagamento_1.Pagamento],
    migrations: [__dirname + '/migration/**/*.ts'],
    subscribers: [__dirname + '/subscriber/**/*.ts'],
    ssl: {
        rejectUnauthorized: false,
    },
});