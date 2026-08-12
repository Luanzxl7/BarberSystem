# BarberSystem

Sistema web de gestão para barbearias com múltiplos profissionais e autoagendamento para clientes.

## Pré-requisitos

- [Node.js](https://nodejs.org/) >= 20
- [pnpm](https://pnpm.io/) >= 9

## Início Rápido

```bash
# 1. Instalar dependências
pnpm install

# 2. Configurar variáveis de ambiente
cp .env.example .env
# Editar .env com os valores reais antes de prosseguir

# 3. Iniciar em desenvolvimento
pnpm dev
```

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
