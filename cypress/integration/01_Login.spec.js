import Config from "./Config";

describe ('01 Login', () => {

    Config.users.forEach(user => {
      it('Login user (' + user.login + ')', () => {
        // Ir a inicio
        cy.visit('/');
  
        // Introducir login
        cy.get('[type="text"].login__form__input').type(user.login)
  
        // Introducir password
        cy.get('[type="password"].login__form__input').type(user.password)
  
        // Click en el boton de login
        cy.get('.login__form__button').click()
      })
  
      it('Check user can see homepage (' + user.login + ')', () => {
        // Comprobar que el usuario esta en la pagina de inicio
        cy.get('.home').should('be.visible')
        cy.get('.users > div').should('have.length', user.numFriends);
      })
    })

    //it('Login user not registered', () => {
      // TODO hacer el codigo de este test
      // Ir a inicio
      // Introducir login no registrado
      // Introducir password
      // Click en el boton de login
      // Comprobar que sale un mensaje de error al hacer el login
    //})
});