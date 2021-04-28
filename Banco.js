const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const models = require('./models');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json());

app.use(express.static(__dirname));
app.use(express.static(__dirname + '/config'));
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/html'));
app.use(express.static(__dirname + '/img'));
app.use(express.static(__dirname + '/migrations'));
app.use(express.static(__dirname + '/models'));
app.use(express.static(__dirname + '/seeders'));
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/html/index.html");
});
app.get("/cadastro_questoes", function (req, res) {
    res.sendFile(__dirname + "/html/formulario.html");
});

let Jogador = models.Jogador;
let Historico = models.Historico;
let Categoria = models.Categoria;
let Midia = models.Midia;
let Questao = models.Questao;
app.post('/create', async (req, res) => {
    let criacao = await Jogador.create({
        sexo: req.body.sexo,
        nome: req.body.nome,
        senha: req.body.senha,
        usuario: req.body.usuario,
        datanascimento: new Date(req.body.datanascimento),
        email: req.body.email,
        data_criacao: new Date(),

    });
    res.send('usuario criado com sucesso');
})
app.get('/ler', async (req, res) => {
    let ler = await Jogador.findAll()
    console.log(ler);
    res.send(ler);
})

app.post('/createhistorico', async (req, res) => {
    let criacao = await Historico.create({
        JogadorId: req.body.id,
        trofeus: '',
        ranking: 0,
        ultimo_dia: new Date(),
    })
    res.send('historico criado com sucesso');
})

app.post('/login', async (req, res) => {
    let usuario = await Jogador.findOne({
        where: {
            usuario: req.body.usuario
        }
    })
    if (usuario === null) {
        let email = await Jogador.findOne({
            where: {
                email: req.body.usuario
            }
        })
        if (email === null) {
            res.send(JSON.stringify('error'));
        } else {
            let email_senha = await Jogador.findOne({
                where: {
                    email: req.body.usuario,
                    senha: req.body.senha
                }
            })
            console.log(email_senha);
            if (email_senha === null) {
                res.send(JSON.stringify('error'));
            } else {
                res.send(email_senha);
                console.log(email_senha);
            }
        }
    } else {
        let usuario_senha = await Jogador.findOne({
            where: {
                usuario: req.body.usuario,
                senha: req.body.senha
            }
        })
        if (usuario_senha === null) {
            res.send(JSON.stringify('error'))
        } else {
            res.send(usuario_senha)
            console.log(usuario_senha);
        }
    }
})
app.post('/verificaremail', async (req, res) => {
    let response = await Jogador.findOne({
        where: {
            email: req.body.email
        }
    })
    if (response === null) {
        res.send(JSON.stringify('error'));
        console.log(response);
    } else {
        res.send(response);
        console.log(response)
    }
})
app.post('/verificarusuario', async (req, res) => {
    let response = await Jogador.findOne({
        where: {
            usuario: req.body.usuario
        }
    })
    if (response === null) {
        res.send(JSON.stringify('error'));
        console.log(response);
    } else {
        res.send(response);
        console.log(response)
    }
})
app.post('/categorias_feitas', async (req, res) => {
    const categorias = await Categoria.findAll({
        attributes: ['nome', 'url', 'id']
    });
    res.send(categorias)
})
app.post('/questao', async (req, res) => {
    let criacao = await Questao.create({
        tipo: req.body.tipo,
        categoria: req.body.categoria,
        frase: req.body.frase,
        op1: req.body.op1,
        op2: req.body.op2,
        op3: req.body.op3,
        op4: req.body.op4,
        op5: req.body.op5,
        url1: req.body.url1,
        url2: req.body.url2,
        url3: req.body.url3,
        url4: req.body.url4,
        url5: req.body.url5,
    });
    res.send('questao criada com sucesso');
})
app.post('/createcategoria', async (req, res) => {
    let criacao = await Categoria.create({
        url: req.body.url,
        nome: req.body.nome,
    })
    res.send('Categoria criado com sucesso');
})
app.post('/categoria', async (req, res) => {
    let criacao = await Categoria.create({
        url: req.body.url,
        nome: req.body.categoria,
    });
    res.send('categoria enviada');
})
app.post('/midia', async (req, res) => {
    let criacao = await Midia.create({
        descricao: req.body.descricao,
        url: req.body.url1,
        nome: req.body.nome,
    });
    res.send('categoria enviada');
})

const port = 3000;
app.listen(port, (req, res) => console.log(`Example app listening on port ` + port + `!`))