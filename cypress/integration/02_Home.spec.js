import Config from './Config';
const user = Config.users[0];

describe('02 Home', () => {
  it('Login user (' + user.login + ')', () => {
    // Ir a inicio
    cy.visit('/');

    // Introducir login
    cy.get('[type="text"].login__form__input').type(user.login);

    // Introducir password
    cy.get('[type="password"].login__form__input').type(user.password);

    // Click en el boton de login
    cy.get('.login__form__button').click();
  });

  it('Check user can see homepage (' + user.login + ')', () => {
    // Comprobar que el usuario esta en la pagina de inicio
    cy.get('.home').should('be.visible');
    cy.get('.users > div').should('have.length', user.numFriends);
    cy.get('.users > div').first().click();

    // 1. Logearse
// 2. Comprobar que el usuario tiene amigos
// 3. Hacer click en uno de ellos
// 4. Comprobar que sale la info del amigo
  });
});
