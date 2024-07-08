@Login
Feature: Login Page - Login Functionality

  Background: common steps in scenarios
    Given I am an Ecommerce home Page
    And I can see page url contains "automationteststore.com" and title "A place to practice your automation skills"
    And I tap on "Login or register" link
    And I can see page url contains "account/login" and title "Account Login"
    And I can see "Returning Customer" and "I am a new customer." sub headings texts

  @LoginPositive
  Scenario Outline: user should be able to login with valid credentials
    And I login in the login page as a returning customer:
      | loginName    | password     |
      | webdriverio2 | webdriverio2 |
    And I should be presented with welcome message "<loginValidationMessage>"
    And I can see "Dashboard" and "Welcome back" message in the account page
    And I tap on "Logoff" icon in the Aside Widget
    And I can see "Account Logout" header text
    And I click the "Continue" button
    And I can see page url contains "automationteststore.com" and title "A place to practice your automation skills"
    Examples:
      | loginValidationMessage |
      | Welcome back           |

  @LoginNegative
  Scenario Outline: User should NOT be able to login with invalid credentials
    And I login in login page "<loginName>" and "<password>"
    Then should be presented with the following Error validation message as "<loginValidationErrorMessage>"
    Examples:
      | loginName       | password      | loginValidationErrorMessage                  |
      | WrongLoginName  | Manchester1   | Error: Incorrect login or password provided. |
      | datastudioplace | WrongPassword | Error: Incorrect login or password provided. |
      | WrongLoginName  | WrongPassword | Error: Incorrect login or password provided. |
      |                 |               | Error: Incorrect login or password provided. |
      | datastudioplace |               | Error: Incorrect login or password provided. |
      |                 | Manchester1   | Error: Incorrect login or password provided. |