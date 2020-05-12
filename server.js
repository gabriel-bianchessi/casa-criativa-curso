//usei o express para criar e configurar o servidor
const express = require("express");
const server = express();


const ideas = [
    {
        img : "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title : "Cursos de Programação",
        category: "Estudo",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias suscipit repellendus dolore, harum nostrum fuga facere!",
        url: "https://rocketseat.com.br"
    },
    {
        img : "https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title : "Exercício",
        category: "Saúde",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias suscipit repellendus dolore, harum nostrum fuga facere!",
        url: "https://rocketseat.com.br"
    },
    {
        img : "https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title : "Meditação",
        category: "Mentalidade",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias suscipit repellendus dolore, harum nostrum fuga facere!",
        url: "https://rocketseat.com.br"
    },
    {
        img : "https://image.flaticon.com/icons/svg/2729/2729032.svg",
        title : "Karaokê",
        category: "Diversão em família",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias suscipit repellendus dolore, harum nostrum fuga facere!",
        url: "https://rocketseat.com.br"
    }
]

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
    
    //espalhar no array e reverter 
    const reversedIdeas = [...ideas].reverse();

    //para exibir as duas últimas ideias 
    let lastIdeas = []
    for (let idea of reversedIdeas) {
        if(lastIdeas.length < 2) {
            lastIdeas.push(idea)
        }
    }

    return res.render("index.html", { ideas : lastIdeas})
})


//renderização do ideas
server.get("/ideias", function(req, res) {
    
    const reversedIdeas = [...ideas].reverse();

    return res.render("ideias.html", {ideas: reversedIdeas})
})

//liguei meu servidor na porta 3000
server.listen(3000)