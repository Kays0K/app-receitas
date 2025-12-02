import { fastify } from 'fastify'

const app = fastify()

// Banco de dados em memória (Array)
const users = []

const personagens = []

// Rota de Health Check (Verificação de saúde da API)
app.get('/', () => {
    return 'Olá! A API está funcionando corretamente.'
})

// Configuração para rodar o servidor
app.listen({ port: 3333 }).then(() => {
    console.log('Servidor rodando em http://localhost:3333')
})

// Rota para cadastrar usuários
app.post('/register', (request, reply) => {
    // Pegando dados do corpo da requisição
    const { nome, classe, nivel } = request.body

    // Criando o objeto usuário
    const newUser = {
        id: users.length + 1,
        nome: nome,
        classe: classe,
        nivel: nivel
    }

    // Salvando no "banco de dados" (Array)
    users.push(newUser)

    return reply.status(201).send({ message: 'Personagem cadastrado com sucesso!' })
})
