## About

The objective of this project is that everyone can use it as a Base Framework, it includes:
    - Reports generation
    - Enviroment variables management
    - POM implmentation
    - BDD implementation

## 💻 Pre-requisites

1. Node JS

## 🚀 Install the project

Install project dependencies with: npm i

## Run the project

Console run [this uses chrome]: `npm run cypress:execution`
UI run: `npx cypress open`

## Reports

The project generates 3 outputs:
    - Cucumber report: it changes everytime a console run is made
    - HTML report: Run `node ./cucumber-html-report.js` and look for the index file in the report directory
    - Log output: You will see it in the terminal after a console run