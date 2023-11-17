# Documentação do Projeto de API - MBA Mobile Development
## Introdução
Este projeto é uma aplicação de gerenciamento de usuários, clientes e informações financeiras, com um sistema de autenticação seguro.

O objetivo deste projeto é demonstrar o conteúdo aprendido de desenvolvimento de aplicativos web usando Node.js e MongoDB durante as aulas de API e Microsserviço do MBA Mobile Development.

## Requisitos do Sistema
Para executar o projeto em seu ambiente local, você deve atender aos seguintes requisitos:

- Node.js
- Docker
- Git
- Postman (ou outra ferramenta de teste de API)

## Instalação
Siga estas etapas para instalar e configurar o projeto em seu ambiente local:

1. Clone o repositório:
```
git clone https://github.com/nandabalassoni/projetoMBABackEnd.git
cd projetoapi
```

2. Instale as dependências:
   ```npm install```

3. Inicie o servidor:

```node server.js```

## Uso

### Acesso à API
A API pode ser acessada em http://localhost:3000

### Autenticação
Para acessar as rotas protegidas, você deve incluir um token JWT válido no cabeçalho da solicitação.

Para obter um token JWT, utilize a rota de autenticação.

### Rotas

Usuários
Cadastrar um novo usuário:
```POST /api/usuarios/cadastro```

Autenticar usuário e obter token JWT:
```POST /api/usuarios/autenticacao```

Alterar senha do usuário:
```PUT /api/usuarios/alterarsenha```

Clientes
Cadastrar um novo cliente:
```POST /api/clientes/cadastrarcliente```

Atualizar informações do cliente:
```PUT /api/clientes/atualizarcliente/:clienteId```

Informações Financeiras
Cadastrar informações financeiras:
```POST /api/financeiro/cadastrarfinanceiro```

Atualizar informações financeiras:
```PUT /api/financeiro/atualizarfinanceiro/:financeiroId```

## Banco de Dados
O projeto utiliza o MongoDB como banco de dados.
A estrutura do banco de dados está definida nos modelos de dados.
Certifique-se de que o MongoDB esteja instalado e em execução.

## Segurança
As senhas dos usuários são criptografadas antes de serem armazenadas no banco de dados.
A autenticação é realizada por meio de tokens JWT.

## Erros e Exceções
O projeto utiliza códigos de erro HTTP padrão, como 400 para solicitações inválidas e 401 para acesso não autorizado.

## Autores
- Maria Fernanda
- Nayara Felix