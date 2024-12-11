import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerOptions from './swaggerConfig';
import usuarioRoutes from './routes/usuarioRoutes';
import pagamentoRoutes from './routes/pagamentosRoutes';
import turmaRoutes from './routes/turmaRoutes';

const app = express();

app.use(cors());
app.use(express.json());

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


app.use('/users', usuarioRoutes);
app.use('/pagamentos', pagamentoRoutes);
app.use('/turma', turmaRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Swagger UI disponível em http://localhost:${PORT}/api-docs`);
});
