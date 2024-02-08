Feature: Login page
    Feature Login page will work depending on the user credentials.

    Background:
        Given the user opens the website in the log in form

    @OK_RUN
    Scenario: Success Login
        When the user logs in with username and password
        Then the system shows the home page

    @OK_RUN
    Scenario Outline: Login exceptions
        When the tries to log in with username "<username>" and password "<password>"
        Then the system shows an error
    
    Examples:
        | username  | password    | 
        | student   | password    | 
        | estudiante| Password123 |