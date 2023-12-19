import {Given,When,Then, And, But} from "@badeball/cypress-cucumber-preprocessor";
import {loginPage} from "../../pages/LoginPage"

Given("the user opens the website in the log in form", () => {
  cy.visit("/");
});

When("A user enters the username {string}, the password {string}, and clicks on the login button", (username,password) => {
  loginPage.submitLogin(username,password)
  
});

Then("the system shows the home page", () => {
  cy.url().should("contains", "/logged-in-successfully");
});


When("the user logs in with username {string} and password {string}", (username, password) =>{
  loginPage.submitLogin(username,password)
})


Then("the system shows an error", () => {
  cy.get('#error').should('exist');
});
