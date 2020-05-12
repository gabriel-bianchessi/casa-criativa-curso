//usei o express para criar e configurar o servidor
const express = require("express");
const server = express();

//confgurar arquivos estáticos
server.use(express.static("public"))


//configuração do nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express : server,
    noCache : true, //boolean
})



//criei uma rota /
// e capturo o pedido do cliente para responder
server.get("/", function(req, res) {
    return res.render("index.html")
})

server.get("/ideias", function(req, res) {
    return res.render("ideias.html")
})

//liguei meu servidor na porta 3000
server.listen(3000)