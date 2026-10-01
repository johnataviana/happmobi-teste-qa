describe('HappLearning - testes de usuários', {
  testIsolation: true
}, () => {

  const login = () => {
    cy.clearCookies();
    cy.clearLocalStorage();

    cy.visit('/login/entrar');

    cy.get('input[data-testid="loginInput"]', { timeout: 15000 })
      .should('be.visible')
      .and('not.be.disabled')
      .clear()
      .type(Cypress.env('username'));

    cy.get('input[data-testid="passwordInput"]', { timeout: 15000 })
      .should('be.visible')
      .and('not.be.disabled')
      .clear()
      .type(Cypress.env('password'), { log: false });

    cy.get('button[data-testid="button"]', { timeout: 15000 })
      .should('be.visible')
      .and('not.be.disabled')
      .click();

    cy.location('pathname', { timeout: 20000 }).should((pathname) => {
      expect(pathname).not.to.include('/login/entrar');
    });

    cy.wait(1500);
  };

  const openUserList = () => {
    cy.get('button[aria-label="Menu do administrador"]', { timeout: 15000 })
      .should('be.visible')
      .click();

    cy.wait(500);

    cy.contains('span.dictionary-text', /^Usuários$/i, { timeout: 15000 })
      .should('be.visible')
      .then(($text) => {
        const $clickableParent = $text.closest(
          'button, a, [role="button"], li, div'
        );

        expect(
          $clickableParent.length,
          'Elemento clicável de Usuários'
        ).to.be.greaterThan(0);

        cy.wrap($clickableParent)
          .should('be.visible')
          .click();
      });

    cy.wait(1000);

    cy.contains('span.dictionary-text', /^Lista$/i, { timeout: 15000 })
      .should('be.visible')
      .then(($text) => {
        const $clickableParent = $text.closest(
          'button, a, [role="button"], li, div'
        );

        expect(
          $clickableParent.length,
          'Elemento clicável de Lista'
        ).to.be.greaterThan(0);

        cy.wrap($clickableParent)
          .should('be.visible')
          .click();
      });

    cy.location('pathname', { timeout: 15000 })
      .should('eq', '/app/admin/usuarios/listagem');

    cy.wait(1500);
  };

  it('CT-01 - pesquisar usuário existente', () => {
    login();
    openUserList();

    const usuario = 'usuario.teste.1790796662402@teste.com';

    cy.get('input[placeholder="Pesquisar"]', { timeout: 15000 })
      .should('be.visible')
      .and('not.be.disabled')
      .clear()
      .type(usuario);

    cy.wait(500);

    cy.contains(usuario, { timeout: 15000 })
      .should('be.visible');

    cy.screenshot('CT-01-pesquisa-usuario-existente', {
      capture: 'fullPage'
    });
  });

  it('CT-02 - impedir criação de usuário sem senha obrigatória', () => {
    login();
    openUserList();

    cy.get('button[data-testid="button"]', { timeout: 15000 })
      .should('be.visible')
      .and('not.be.disabled')
      .click();

    cy.contains(/Novo Usuário/i, { timeout: 15000 })
      .should('be.visible');

    cy.get('#password-password', { timeout: 15000 })
      .should('exist')
      .scrollIntoView()
      .should('be.visible')
      .and('not.be.disabled')
      .then(($input) => {
        expect(
          $input.val(),
          'Campo de senha deve iniciar vazio'
        ).to.equal('');
      });

    cy.get('button[data-testid="button-salvar"]', { timeout: 15000 })
      .scrollIntoView()
      .should('be.visible')
      .and('not.be.disabled')
      .click();

    cy.wait(1000);

    cy.get('#password-password', { timeout: 15000 })
      .scrollIntoView()
      .should('be.visible');

    cy.get('#password-password')
      .should('have.value', '');

    cy.screenshot('CT-02-senha-obrigatoria', {
      capture: 'fullPage'
    });
  });

});
