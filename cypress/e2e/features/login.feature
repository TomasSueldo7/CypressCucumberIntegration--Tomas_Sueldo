Feature: Login page

    Feature Login page will work depending on the user credentials.

    Background:
        Given the user opens the website in the log in form


    Scenario: Success Login
        When A user enters the username "student", the password "Password123", and clicks on the login button
        Then the system shows the home page

    Scenario Outline: Login exceptions
        When the user logs in with username "<username>" and password "<password>"
        Then the system shows an error
    
    Examples:
        | username  | password    | 
        | student   | password    | 
        | estudiante| Password123 |