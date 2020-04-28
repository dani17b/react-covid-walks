describe ('01 Login', () => {
    it ('Login', () => {
      cy.visit('/');
      cy.get('[type="text"]').type("test")
      cy.get('[type="password"]').type("1234")
      cy.get('.login__form__button').click()
    });

    it ('Check user can see home', () => {
        cy.get('.home').should('be.visible') 
    })
});