# BarberSystem

Sistema web de gestão para barbearias com múltiplos profissionais e autoagendamento para clientes.

## Pré-requisitos

- [Node.js](https://nodejs.org/) >= 20
- [pnpm](https://pnpm.io/) >= 9
- [Docker](https://www.docker.com/) com Docker Compose

## Início Rápido

```bash
# 1. Instalar dependências
pnpm install

# 2. Configurar variáveis de ambiente
cp .env.example .env
# Editar .env com os valores reais antes de prosseguir

# 3. Iniciar o PostgreSQL
docker compose up -d postgres

# 4. Iniciar API e web no host
pnpm dev
```

## Ambiente local com Docker

O Docker Compose executa somente a infraestrutura PostgreSQL. A API e o frontend continuam
rodando no host com `pnpm dev`, usando as portas e variáveis definidas no `.env`.

```bash
# Iniciar o PostgreSQL em segundo plano
docker compose up -d postgres

# Conferir o estado e o healthcheck
docker compose ps

# Acompanhar os logs
docker compose logs -f postgres

# Parar os containers (o volume de dados é preservado)
docker compose down
```

O volume nomeado `barbersystem-postgres-data` mantém os dados entre reinicializações. Os valores
de acesso presentes no `.env.example` são fictícios e destinados exclusivamente ao ambiente local.

## Estrutura do Monorepo

```
barbersystem/
├── apps/
│   ├── api/          # API — Node.js + TypeScript
│   └── web/          # React SPA — Vite + TypeScript
├── packages/
│   └── shared/       # Definições TypeScript compartilhadas
├── .github/
│   └── workflows/
│       └── ci.yml    # GitHub Actions: lint + typecheck + testes
├── .env.example      # Template de variáveis de ambiente (sem valores reais)
├── docker-compose.yml # PostgreSQL para desenvolvimento local
├── eslint.config.js  # ESLint v9 flat config
├── tsconfig.base.json
└── pnpm-workspace.yaml
```

## Comandos Disponíveis

| Comando             | Descrição                                              |
| ------------------- | ------------------------------------------------------ |
| `pnpm dev`          | Inicia todos os serviços em paralelo (desenvolvimento) |
| `pnpm build`        | Build de produção em todos os pacotes                  |
| `pnpm lint`         | Executa ESLint em todo o projeto                       |
| `pnpm lint:fix`     | Corrige problemas de lint automaticamente              |
| `pnpm format`       | Formata o código com Prettier                          |
| `pnpm format:check` | Verifica formatação sem modificar arquivos             |
| `pnpm typecheck`    | Verifica tipos TypeScript em todos os pacotes          |
| `pnpm test`         | Executa testes em todos os pacotes                     |

### Comandos por pacote

```bash
# Apenas a API
pnpm --filter @barbersystem/api <comando>

# Apenas o Web
pnpm --filter @barbersystem/web <comando>

# Apenas o Shared
pnpm --filter @barbersystem/shared <comando>
```

## Fluxo de Desenvolvimento

Nunca desenvolver diretamente na branch `main`.

```
Issue → branch → implementação → testes → commit → PR → revisão → merge
```

### Convenção de branches

```
feature/<numero-issue>-descricao
fix/<numero-issue>-descricao
refactor/<numero-issue>-descricao
chore/<numero-issue>-descricao
docs/<numero-issue>-descricao
```

### Convenção de commits (Conventional Commits)

```
feat:      nova funcionalidade
fix:       correção de bug
refactor:  melhoria interna sem mudança de comportamento
docs:      documentação
test:      testes
chore:     configuração, build, dependências
```

## Variáveis de Ambiente

Copie `.env.example` para `.env` e preencha os valores reais.
O arquivo `.env` está no `.gitignore` e **nunca deve ser versionado**.

## Licença

Privado — todos os direitos reservados.
