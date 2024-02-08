import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import {loginPage} from "../../pages/LoginPage"

Given("the user opens the website in the log in form", () => {
  cy.visit("/");
});

When("the user logs in with username and password", () => {
  loginPage.submitLogin(Cypress.env("username"),Cypress.env("password"))
  
});

Then("the system shows the home page", () => {
  cy.url().should("contains", "/logged-in-successfully");
});


When("the tries to log in with username {string} and password {string}", (username, password) =>{
  loginPage.submitLogin(username,password)
})


Then("the system shows an error", () => {
  cy.get('#error').should('exist');
});
