const { createYield } = require('typescript');

describe('Ask question', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('When signed in and ask a valid question, the question should successfully save', () => {
    cy.contains('Q & A');
    cy.contains('Unanswered Questions');

    cy.contains('Sign In').click();
    cy.url().should('include', 'auth0');
    cy.findByLabelText('Email')
      .type('kornast@yandex.ru')
      .should('have.value', 'kornast@yandex.ru');
    cy.findByLabelText('Password')
      .type('gfhjkm4Auth1')
      .should('have.value', 'gfhjkm4Auth1');
    cy.get('form').submit();
    cy.contains('Unanswered Questions');

    cy.contains('Ask a question').click();
    cy.contains('Ask a Question');
    let title = 'title test';
    let content = 'Lots and lots and lots and lots and lots of content test';
    cy.findByLabelText('Title').type(title).should('have.value', title);
    cy.findByLabelText('Content').type(content).should('have.value', content);
  });
});
