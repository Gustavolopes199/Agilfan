import { DataSource } from 'typeorm';
import { Turma } from './entity/Turma';
import { Pagamento } from './entity/Pagamento';
import { Usuario } from './entity/Usuario';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'dpg-ctcf2ea3esus73bf0030-a.oregon-postgres.render.com',
  port: 5432,
  username: 'agilfan',
  password: '26X7ZYDcOqizx0VB7k7WmQEGoyBLyrwc',
  database: 'agilfan',
  synchronize: true,
  logging: false,
  entities: [Usuario, Turma, Pagamento],
  migrations: [__dirname + '/migration/**/*.ts'],
  subscribers: [__dirname + '/subscriber/**/*.ts'],
  ssl: {
    rejectUnauthorized: false,
  },
});
