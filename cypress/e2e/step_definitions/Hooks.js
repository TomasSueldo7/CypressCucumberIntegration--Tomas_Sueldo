import { BeforeAll, Before, After, AfterAll  } from "@badeball/cypress-cucumber-preprocessor";

BeforeAll(function () {
    cy.log('This hook will be executed once at the beginnig of a feature.')
});

Before({ tags: "@OK_RUN" },function () {
    cy.log('This hook will be executed before scenarios tagged with @OK_RUN')
});

After({ tags: "@OK_RUN" },function () {
    cy.log('This hook will be executed after scenarios tagged with @OK_RUN')
});

AfterAll(function () {
    cy.log('This hook will be executed once at the end of a feature.')
});