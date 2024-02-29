const express = require('express');
const sampleController = require('./controllers/sampleController');
const loggerMiddleware = require('./middlewares/loggerMiddleware');
const errorHandlerMiddleware = require('./middlewares/errorHandlerMiddleware');

const app = express();

// Middleware para log de requisições
app.use(loggerMiddleware);

// Rota GET para retornar uma mensagem simples
app.get('/', sampleController.getMessage);

// Middleware para tratamento de erros
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
