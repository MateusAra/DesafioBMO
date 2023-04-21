describe('Criar usuário', () => {
  it('Cadastrando usuário', () => {
    //Arrange
    cy.VisitOrganizze()
    //Action
    cy.SignUpForm()
    cy.SignUpProcess()
    //Assert
    cy.SignUpAssert()
  })
})