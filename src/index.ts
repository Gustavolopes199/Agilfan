import express from 'express';
import cors from 'cors';
import usuarioRoutes from './routes/usuarioRoutes';
import pagamentoRoutes from './routes/pagamentosRoutes';
import turmaRoutes from './routes/turmaRoutes';

const app = express();

app.use(cors());
app.use(express.json());


app.use('/users', usuarioRoutes);
app.use('/pagamentos', pagamentoRoutes);
app.use('/turma', turmaRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Swagger UI disponível em http://localhost:${PORT}/api-docs`);
});
