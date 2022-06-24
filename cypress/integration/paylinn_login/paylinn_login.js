
Given('user in on the application page', () => {
  cy.visit("https://paylinn.com")
})

Given('clicks on login link', () => {
    cy.contains('Sign In').click()
})

Given('enter username and password', () => {
  cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
  .type('User')
  cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
  .type('user')
})

Given('click login button', () => {
  
  cy.get('.MuiButton-label').click();
})

Given('verify login is successfull', () => {
  cy.get('.header__nav > :nth-child(1) > .header__lineOne')
  .should('contain.text','Welcome')
})