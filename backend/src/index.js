const express = require('express'); 
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

//Conexão com nossa base de dados;
mongoose.connect('mongodb+srv://natan:1Lazzeri@@cluster0-aloxh.mongodb.net/saulo?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//Configuração para TODAS as rotas da nossa aplicação, usamos o .use Ex:
//Fazemos com que todas as nossas requisições entendam o formato json;
app.use(express.json());

//Faço com que todas minhas rotas sejam entendidas na minha aplicação;
app.use(routes);

app.listen(3333);