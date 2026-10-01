# Happmobi – Teste Técnico QA | Cypress

## Objetivo
Teste técnico do módulo **Admin > Usuários > Lista** da plataforma HappLearning, conforme o briefing fornecido para o processo seletivo.

## Entrega
A entrega está organizada em três partes:

- **Automação Cypress:** 2 cenários automatizados (CT-01 e CT-02).
- **Documentação:** plano de testes em Excel e relatório em PDF, contendo cenários, riscos, priorização e resultados.
- **Evidências:** prints selecionados e vídeo da execução.

## Cenários automatizados

- **CT-01 – Pesquisa de usuário existente:** pesquisa um usuário existente e valida o resultado.
- **CT-02 – Senha obrigatória:** tenta concluir a criação sem preencher a senha obrigatória e valida a rejeição/validação apresentada pela aplicação.

## Estrutura

```text
.
├── cypress/
│   ├── e2e/usuarios.cy.js
│   ├── fixtures/user.json
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── docs/
│   ├── Happmobi_Plano_de_Testes_QA.xlsx
│   └── Happmobi_Relatorio_QA.pdf
├── evidencias/
│   ├── screenshots/
│   └── videos/
├── cypress.config.js
├── cypress.env.example.json
├── package.json
├── package-lock.json
└── README.md
```

## Segurança

Credenciais reais **não fazem parte da entrega**. O arquivo `cypress.env.json` é ignorado pelo Git e não está incluído neste pacote.

Crie localmente `cypress.env.json` a partir de `cypress.env.example.json`:

```json
{
  "username": "USUARIO_FORNECIDO_PELA_HAPPMOBI",
  "password": "SENHA_FORNECIDA_PELA_HAPPMOBI"
}
```

## Pré-requisitos

- Node.js 18+
- npm
- Chrome ou Edge
- Acesso válido ao ambiente de homologação fornecido pela Happmobi

## Instalação

```bash
npm install
```

## Execução

Modo interativo:

```bash
npm run cy:open
```

Modo com navegador visível:

```bash
npm run cy:run:headed
```

Execução headless:

```bash
npm run cy:run
```

Somente os cenários deste case:

```bash
npx cypress run --spec "cypress/e2e/usuarios.cy.js"
```

## Evidências

As evidências selecionadas para a entrega ficam em `evidencias/`:

- `screenshots/CT-01-pesquisa-usuario-existente.png` – CT-01.
- `screenshots/CT-02-senha-obrigatoria.png` – CT-02.
- `screenshots/01-acesso-perfil-admin.png` – acesso/perfil do ambiente.
- `videos/execucao-testes-cypress.mp4` – gravação da execução entregue.

Os artefatos gerados automaticamente por novas execuções do Cypress não fazem parte do pacote de entrega.

## Resultado informado da execução

A execução dos dois cenários automatizados foi concluída no ambiente de homologação:

- **CT-01 – pesquisa de usuário existente: PASS**
- **CT-02 – tentativa de criação sem senha obrigatória: PASS**

## Documentação

### `docs/Happmobi_Plano_de_Testes_QA.xlsx`

Documento principal da análise, com abas para:

- Casos de teste;
- Riscos;
- Execução/evidências.

### `docs/Happmobi_Relatorio_QA.pdf`

Resumo apresentável da estratégia, priorização, riscos, resultados e evidências selecionadas.

## Boas práticas adotadas

- Credenciais fora do versionamento.
- `package-lock.json` mantido para reprodutibilidade.
- `node_modules` não incluído na entrega; deve ser restaurado com `npm install`.
- Backups, diagnósticos, dumps e arquivos temporários removidos.
- Evidências selecionadas separadas dos artefatos gerados automaticamente pelo Cypress.
- Código funcional dos testes preservado nesta revisão.
