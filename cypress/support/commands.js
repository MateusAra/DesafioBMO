Cypress.Commands.add('SignUpForm', function(){
    cy.get('.text-2xl').should('be.visible')
    cy.get('#email').type('o@uorak.com', {log: false}, {delay: 0})
    cy.get('#password').type('mateus2002', {log: false}, {delay: 0})
    cy.get('#repeatPassword').type('mateus2002', {log: false}, {delay: 0})
    cy.get('#termsOfuse').check().should('be.checked')
});

Cypress.Commands.add('SignUpProcess', function(){
    cy.contains('Começar a usar').click()
    cy.get('h1').should('be.visible')
    cy.get('[type="text"]').type('Mateus')
    cy.get('.ld-ext-right').click()
    cy.get('[for="meus_objetivos_1"]').click()
    cy.get('.ld-ext-right').click()
    cy.get(':nth-child(2) > h1').should('be.visible')
    cy.get('#introducao-next-button').click()
    cy.get('#introducao-next-button').click()
    cy.get('#introducao-end-button').click()
});

Cypress.Commands.add('VisitOrganizze', function(){
    cy.visit('https://organizze.com.br')
    cy.get('.justify-start > a > .flex').should('be.visible')
    cy.contains('Teste gratuitamente').click()
});

Cypress.Commands.add('SignUpAssert', function(){
    cy.get('.info-profile').should('be.visible')
    cy.get('.info-list').should('be.visible')
});