# Teste Técnico QA — Happmobi

## 📋 Sobre o projeto

Este repositório contém a entrega do teste técnico para a posição de **Analista de Qualidade (QA)**.

O projeto foi desenvolvido com foco na aplicação de práticas de **Quality Assurance**, contemplando planejamento de testes, elaboração de casos de teste, execução manual, automação de testes e registro de evidências.

---

## 🎯 Objetivos

O projeto tem como principais objetivos:

* Elaborar um plano de testes estruturado;
* Identificar cenários relevantes para validação da aplicação;
* Criar casos de teste funcionais;
* Executar testes manuais;
* Desenvolver testes automatizados;
* Validar cenários positivos e negativos;
* Registrar evidências das execuções;
* Documentar os resultados encontrados;
* Apresentar oportunidades de melhoria relacionadas à qualidade do produto.

---

## 🧪 Estratégia de testes

Foram considerados diferentes aspectos da qualidade da aplicação, incluindo:

* Testes funcionais;
* Testes positivos;
* Testes negativos;
* Validação de campos obrigatórios;
* Validação de comportamento da aplicação;
* Testes de pesquisa de usuários;
* Validação de permissões/perfil de acesso;
* Automação de cenários utilizando Cypress.

---

## 🤖 Automação

A automação foi desenvolvida utilizando:

* **Cypress**
* **JavaScript**
* **Node.js**

A estrutura do projeto contém os arquivos necessários para configuração e execução dos testes automatizados.

### Estrutura principal

```text
cypress/
├── e2e/
│   └── usuarios.cy.js
│
├── fixtures/
│   └── user.json
│
└── support/
    ├── commands.js
    └── e2e.js

cypress.config.js
package.json
package-lock.json
```

---

## ▶️ Como executar a automação

### 1. Instalar as dependências

Dentro da pasta do projeto, execute:

```bash
npm install
```

### 2. Executar os testes em modo interativo

```bash
npx cypress open
```

### 3. Executar os testes em modo headless

```bash
npx cypress run
```

---

## 📊 Documentação

A entrega contém os seguintes documentos:

### Plano de Testes

Arquivo:

`docs/Happmobi_Plano_de_Testes_QA.xlsx`

Contém o planejamento dos testes, cenários e casos de teste utilizados na avaliação.

### Relatório de QA

Arquivo:

`docs/Happmobi_Relatorio_QA.pdf`

Contém o registro e a documentação dos testes realizados, resultados obtidos, evidências e observações relacionadas à qualidade da aplicação.

---

## 📸 Evidências

As evidências das execuções estão disponíveis em:

```text
evidencias/
├── screenshots/
└── videos/
```

### Screenshots

Foram registradas evidências dos principais cenários executados, incluindo:

* Acesso com perfil administrativo;
* Pesquisa de usuário existente;
* Validação de senha obrigatória.

### Vídeo

Também foi disponibilizado um vídeo demonstrando a execução dos testes automatizados com Cypress.

---

## 📁 Estrutura da entrega

```text
Happmobi_Teste_QA_Entrega_Final/
│
├── cypress/
│   ├── e2e/
│   ├── fixtures/
│   └── support/
│
├── docs/
│   ├── Happmobi_Plano_de_Testes_QA.xlsx
│   └── Happmobi_Relatorio_QA.pdf
│
├── evidencias/
│   ├── screenshots/
│   └── videos/
│
├── cypress.config.js
├── cypress.env.example.json
├── package.json
├── package-lock.json
└── README.md
```

---

## 🔎 Principais cenários automatizados

Entre os cenários contemplados estão:

**CT-01 — Pesquisa de usuário existente**

Validação da pesquisa de um usuário existente na aplicação.

**CT-02 — Senha obrigatória**

Validação do comportamento da aplicação quando o campo de senha obrigatório não é preenchido.

Também foi realizada a validação do acesso utilizando o perfil administrativo previsto no cenário de teste.

---

## 📝 Considerações finais

A estrutura da entrega foi organizada de forma a facilitar a análise do projeto, separando:

* Código de automação;
* Configurações;
* Dados de teste;
* Plano de testes;
* Relatório;
* Evidências visuais;
* Vídeo da execução.

O objetivo é proporcionar rastreabilidade entre o planejamento, execução, automação e evidências dos testes realizados.

---

## 👤 Autor

**Johnata Marcelo Viana e Viana**

Teste Técnico — Analista de Qualidade (QA)

GitHub:
https://github.com/johnataviana

Repositório:
https://github.com/johnataviana/happmobi-teste-qa
