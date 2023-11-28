import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';

import mainRoutes from './routes/index';

dotenv.config();

const server = express();

server.set('view engine', 'mustache') // Configurando template engine
server.set('views', path.join(__dirname, 'views')) // Configurando as pastas de visualização do projeto
server.engine('mustache', mustache()); // Setando engine

server.use(express.static(path.join(__dirname, '../public'))); // Configurando página de arquivos estáticos

// <----- Rotas ------>
server.use(mainRoutes);


// <----- Criando página não encontrada ----->
server.use((req, res) => {
    res.render('pages/404');
})

server.listen(process.env.PORT);