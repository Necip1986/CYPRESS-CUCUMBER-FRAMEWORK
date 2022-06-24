import { Given } from "cypress-cucumber-preprocessor/steps";

Given('go to url',()=>{
    cy.visit('https://qa-environment.crystalkeyhotels.com/');
})

Given('click login link',()=>{
    cy.get('#navLogon > .nav-link').click()
})

Given('enter below creds for login',(dataTable)=>{
    cy.get('#UserName').type(dataTable.rawTable[1][0])
    cy.get('#Password').type(dataTable.rawTable[1][1])
})

Given('click on login button',()=>{
    cy.get('#btnSubmit').click()
})

Given('verify login successfull',()=>{
    cy.get('.caption-subject').should('be.visible')
})

