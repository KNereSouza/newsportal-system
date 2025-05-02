# 📰 NewsPortal

Este é um projeto fullstack de um **sistema de gerenciamento de notícias**, desenvolvido como parte do meu portfólio para consolidar conhecimentos em **Node.js, Express, Sequelize, PostgreSQL e Next.js**.

Atualmente, está **em desenvolvimento**.

## 🚧 Status do Projeto

> ⚠️ Em desenvolvimento — funcionalidades básicas estão sendo implementadas e testadas.

## 🎯 Objetivo

Criar uma aplicação completa de gerenciamento e exibição de notícias que simule um ambiente real com papéis distintos (Admin, Editor, Autor), controle de publicação, autenticação, painel administrativo e página pública de leitura.

## 🧱 Tecnologias Utilizadas

### 📦 Backend
- Node.js
- Express
- Sequelize (ORM)
- PostgreSQL
- JWT para autenticação
- Arquitetura MVC + Repository Pattern

### 💻 Frontend
- Next.js
- Axios para consumo da API
- Tailwind CSS (estilização responsiva)

## 👤 Funcionalidades Planejadas

- [ ] Estrutura inicial com Express + Sequelize
- [ ] Conexão com PostgreSQL
- [ ] CRUD de artigos
- [ ] Cadastro e login de usuários com JWT
- [ ] Papéis de usuário: Admin, Editor, Autor
- [ ] Envio e aprovação de artigos por editores
- [ ] Página pública de exibição de artigos (Next.js)
- [ ] Painel administrativo responsivo

## 🧠 Sobre o Autor

Desenvolvido por **Kauã Neres de Souza**, estudante de Ciência da Computação, com foco em desenvolvimento fullstack.  
Este projeto está sendo utilizado para aprofundar conhecimentos técnicos e boas práticas de arquitetura de software.

## 📸 Imagens & Demonstrações (em breve)

*Será incluído após a implementação do frontend.*

## 🚀 Como Executar Localmente

```bash
# Clone o repositório
git clone https://github.com/KNereSouza/newsportal.git

# Instale as dependências do backend
cd newsportal-server
npm install

# Configure as variáveis de ambiente
cp .env.example .env

# Rode as migrations (caso existam)
npx sequelize db:migrate

# Inicie o servidor
npm run dev
