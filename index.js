const express = require("express")
const exphbs = require('express-handlebars')
const mysql = require("mysql2")

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

app.post('/criar' , (requisicoes, resposta) => {
   const descricao =  requisicao.body.descricao
   const completa = 0

   const sql = `INSERT INTO tarefas(descricao, completa) 
   VALUES ('${descricao}','${completa}' )
   `

   conexao.query(sql, (erro) => {
    if (erro) {
        return console.log (erro)
    }

    resposta.redirect('/')
   })
})

app.get('/', (requisicao, resposta) => {
    resposta.render('home')
})

const conexao = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: 'root',
    database: 'todolist',
    port: 3306
})

conexao.connect((erro) => {
    if (erro) {
        return console.log(erro)
    }

    console.log('Estou conectado ao MySql')

    app.listen(3000, () => {
        console.log("Servidor rodando na porta 3000!")
    })
    
})
