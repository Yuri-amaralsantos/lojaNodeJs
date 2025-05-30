import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import { swaggerUi, swaggerSpec } from './swagger';

const app = express();

app.use(bodyParser.json());
app.use('/api', routes);

// ✅ Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
  console.log('Documentação Swagger: http://localhost:3000/api-docs');
});
