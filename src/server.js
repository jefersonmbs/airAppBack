const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const md5 = require('md5');


const app = express();


mongoose.connect('mongodb+srv://root:root@cluster-m8e4a.mongodb.net/airbnb?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


// GET, POST, PUT, DELETE
// req.query = Acessar query paramns (Filtro)
// req.params = Acessar rout Paramns (Edição, Delete)
// req.body = Acessar corpo da requisição (Criação, edição)
app.use(cors())
app.use(express.json());
app.use(routes);

app.listen(3333);

