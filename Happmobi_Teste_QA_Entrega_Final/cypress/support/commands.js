Cypress.Commands.add('loginAsAdmin', () => {
  const username = Cypress.env('username');
  const password = Cypress.env('password');

  if (!username || !password) {
    throw new Error(
      'Credenciais não encontradas. Verifique o arquivo cypress.env.json.'
    );
  }

  cy.visit('/login/entrar');

  cy.get('body', {
    timeout: 15000
  }).should('be.visible');

  cy.get(
    'input[placeholder="Digite seu login"], input[data-testid="loginInput"]',
    {
      timeout: 20000
    }
  )
    .filter(':visible')
    .first()
    .should('be.visible')
    .and('not.be.disabled')
    .clear()
    .type(username);

  cy.get(
    'input[placeholder="Digite sua senha"], input[data-testid="passwordInput"]',
    {
      timeout: 15000
    }
  )
    .filter(':visible')
    .first()
    .should('be.visible')
    .and('not.be.disabled')
    .clear()
    .type(password, {
      log: false
    });

  cy.get('body').then(($body) => {
    const $buttons = $body
      .find('button')
      .filter(':visible')
      .filter((index, element) => !element.disabled);

    const $enterButton = $buttons.filter((index, element) => {
      const ariaLabel = (
        element.getAttribute('aria-label') || ''
      ).toLowerCase();

      const text = (
        element.innerText || ''
      ).trim().toLowerCase();

      const testId = (
        element.getAttribute('data-testid') || ''
      ).toLowerCase();

      return (
        ariaLabel === 'entrar' ||
        text === 'entrar' ||
        testId.includes('entrar') ||
        testId.includes('login')
      );
    });

    if ($enterButton.length === 0) {
      throw new Error(
        'Botão de login não encontrado. Nenhum botão visível habilitado com aria-label, texto ou data-testid relacionado a ENTRAR/LOGIN.'
      );
    }

    cy.wrap($enterButton.first())
      .should('be.visible')
      .and('not.be.disabled')
      .click();
  });

  cy.url({
    timeout: 20000
  }).should('not.include', '/login/entrar');
});


Cypress.Commands.add('acceptSecurityTermsIfPresent', () => {
  const checkbox =
    '[role="checkbox"][aria-label="Aceito os termos de uso da Plataforma Educacional"]';

  cy.get('body').then(($body) => {
    const $checkbox = $body
      .find(checkbox)
      .filter(':visible');

    if ($checkbox.length) {
      if ($checkbox.attr('aria-checked') !== 'true') {
        cy.wrap($checkbox).click();
      }

      cy.wrap($checkbox)
        .should('have.attr', 'aria-checked', 'true');
    }
  });
});


Cypress.Commands.add('goToUserList', () => {
  cy.get('button[aria-label="Menu do administrador"]', {
    timeout: 15000
  })
    .should('be.visible')
    .click();

  cy.wait(1000);

  cy.contains('span.dictionary-text', /^Usuários$/i, {
    timeout: 15000
  })
    .should('be.visible')
    .then(($text) => {
      const text = $text.text().trim();

      cy.get('span.dictionary-text', {
        timeout: 10000
      })
        .filter((index, element) => {
          return Cypress.$(element).text().trim() === text;
        })
        .filter(':visible')
        .first()
        .then(($currentText) => {
          const $clickableParent = $currentText.closest(
            'button, a, [role="button"], li, div'
          );

          if (!$clickableParent.length) {
            throw new Error(
              'Não foi encontrado o elemento clicável responsável pelo menu Usuários.'
            );
          }

          cy.wrap($clickableParent)
            .should('be.visible')
            .click();
        });
    });

  cy.contains('span.dictionary-text', /^Lista$/i, {
    timeout: 15000
  })
    .should('be.visible');

  cy.wait(500);

  cy.contains('span.dictionary-text', /^Lista$/i, {
    timeout: 10000
  })
    .should('be.visible')
    .then(($text) => {
      const text = $text.text().trim();

      cy.get('span.dictionary-text', {
        timeout: 10000
      })
        .filter((index, element) => {
          return Cypress.$(element).text().trim() === text;
        })
        .filter(':visible')
        .first()
        .then(($currentText) => {
          const $clickableParent = $currentText.closest(
            'button, a, [role="button"], li, div'
          );

          if (!$clickableParent.length) {
            throw new Error(
              'Não foi encontrado o elemento clicável responsável pela opção Lista.'
            );
          }

          cy.wrap($clickableParent)
            .should('be.visible')
            .click();
        });
    });

  cy.contains(/Usuários|Gestores/i, {
    timeout: 15000
  }).should('be.visible');
});
