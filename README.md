# API FinnCtrlPro

Uma API RESTful construída com **TypeScript**, **Fastify**, **Prisma**, e documentação automatizada com **Swagger**.  
Padrões de código garantidos com **ESLint + Prettier**.

## Stack

- **Backend:** TypeScript + Fastify
- **ORM:** Prisma
- **Documentação:** Swagger/OpenAPI
- **Lint/Format:** ESLint + Prettier
- **Banco de dados:** PostgreSQL (configurável via `.env`)
- **Autenticação:** JWT (opcional)
- **Teste:** Jest + Supertest (opcional)

## Pré-requisitos

- Node.js >= 22
- pnpm
- PostgreSQL (ou outro banco suportado pelo Prisma)

## Instalação

Clone o repositório:

```bash
git clone <link-do-repositorio> api
cd api
```

Instale dependências:

```bash
pnpm install
```

Configure o banco de dados no arquivo `.env`:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
JWT_SECRET="sua_chave_secreta"
```

## Inicialização

### Rodando a API

```bash
pnpm dev
```

A API estará disponível em: `http://localhost:3000`

### Rodando migrações do Prisma

```bash
pnpm prisma migrate dev --name init
```

### Abrindo o Prisma Studio

```bash
pnpm prisma studio
```

## Documentação da API

A documentação Swagger é gerada automaticamente pelo Fastify e está disponível em:

```
http://localhost:3030/docs
```

## Lint e Formatação

O projeto segue padrões de código com **ESLint + Prettier**.
Variáveis ou parâmetros iniciados com `_` não geram warning de “não usado”.

### Rodando lint

```bash
pnpm lint
```

### Corrigindo problemas automaticamente

```bash
pnpm lint --fix
pnpm format
```

## Estrutura do Projeto

```
api/
├─ src/
│  ├─ core/         # Rotas, controllers, middlewares
│  ├─ main.ts       # Ponto de entrada
│  ├─ server.ts     # Configuração do Fastify
│  ├─ utils/        # Helpers, erros customizados, plugins
│  ├─ modules/      # Modulos da aplicação
├─ prisma/          # Prisma schema e migrações
├─ eslint.config.cjs
├─ .prettierrc
├─ tsconfig.json
├─ package.json
└─ README.md
```

## Segurança

- JWT para autenticação de rotas privadas.

## Links Úteis

- [Prisma Docs](https://www.prisma.io/docs/)
- [Fastify Docs](https://www.fastify.io/docs/latest/)
- [ESLint Docs](https://eslint.org/docs/latest/)
- [Prettier Docs](https://prettier.io/docs/en/)
- [Swagger/OpenAPI](https://swagger.io/specification/)
