import { Given } from "cypress-cucumber-preprocessor/steps";

Given('go to url',()=>{
    cy.visit('https://google.com')
    cy.get('#L2AGLb > .QS5gu').click()

})

Given('search for {string}',(capitals)=>{
    cy.get('input[name="q"]').type(capitals)
    cy.get('.FPdoLc > center > .gNO89b').click({force: true})
    

})

Given('verify the result has {string}',(capitals)=>{
    
    cy.title().should('contain',capitals)
    

})

