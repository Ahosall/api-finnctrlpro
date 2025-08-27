# API FinnCtrlPro

API do melhor sistema de controle financeiro pessoal.

![Node](https://img.shields.io/badge/node-%3E%3D18-brightgreen)
![PostgreSQL](https://img.shields.io/badge/postgresql-%3E%3D14-blue)

## Requisitos

- [NodeJS](https://nodejs.org)
- [PostgreSQL](https://www.postgresql.org)

## Funcionalidades

- Registro de entradas e saídas
- Classificação de transações
- Acompanhamento de saldo e fluxo de caixa

## Instalação

```sh
git clone <link-do-repo> api
cd api/
pnpm i
```

> _Troque o `pnpm` pelo gerenciador de pacotes que preferir._

## Configuração

Copie as variáveis de ambiente do [`.env.example`](./.env.example) para um arquivo `.env` na raiz do projeto e configure-as.

As variáveis obrigatórias são:

- `JWT_SECRET`
- `DATABASE_URL`

## Uso

```sh
# Rodar o servidor
pnpm dev

# Testar rota de saúde
curl http://localhost:3000/health
```

## Documentação

A documentação Swagger está disponível em:

```
http://localhost:3000/docs
```

## Estrutura do Projeto

```sh
api/
+---.vscode/
|       settings.json   # Configurações do VSCode
+---prisma/
|       schema.prisma   # Esquema do banco de dados
\---src/
    |   main.ts         # Inicialização do projeto
    |   server.ts       # Servidores
    +---core/           # Arquivos centrais
    |       routes.ts   # Registrador de rotas HTTP
    +---modules/        # Módulos da aplicação
    +---tests/          # Arquivos de testes
    \---utils/
        +---errors/     # Normalizador de erros
        |       HttpBaseError.ts
        \---plugins/    # Plugins para o Fastify
                auth.ts
                cors.ts
                index.ts
                jwt.ts
                swagger.ts
```

## Testes

> _Ainda não tem, mas em breve irei adicionar_

```sh
pnpm test
```

## Contribuição

Sinta-se à vontade para abrir issues ou pull requests seguindo os padrões do projeto.

---

With 🤍 by [**Ahosall**](https://github.com/Ahosall)
