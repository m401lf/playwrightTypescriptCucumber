Feature: Verification of Registration functionality

  Background: common steps
    Given I am an Ecommerce home Page
    And I can see page url contains "automationteststore.com" and title "A place to practice your automation skills"
    And I tap on "Login or register" link
    And I can see page url contains "account/login" and title "Account Login"
    And I "Continue"
    And I can see page url contains "account/create" and title "Create Account"

  Scenario: 01 I should be able to Register with valid credentials
    And I can see "Your Personal Details" section
    And I input firstName "FirstName"
    And I input lastName "LastName"
    And I input unique email
    And I input telephone "074000000000"
    And I input fax "074000000001"
    And I can see "Your Address" section
    And I input company "Company Ltd"
    And I input Address one "1 Address Street"
    And I input Address two "Gorton South"
    And I input city "Manchester"
    And I select province or state "Lancashire"
    And I input postcode "M18 7QT"
    And I can see "Login Details" section
    And I input unique loginname
    And I input password "password@123"
    And I input confirm password "password@123"
    And I can see "Newsletter" section
    And tick subscription option "Yes"
    And I tick "Privacy Policy" radio button
    When I tap "Continue" button
    Then I can see page url contains "success" and title "Your Account Has Been Created!"
    And I tap "Continue" button in Account success page
    And I can see "Dashboard" and "Welcome back" message in the account page
    And I tap on "Logoff" icon in the Aside Widget
    And I can see "Account Logout" header text
    And I click the "Continue" button
    And I can see page url contains "automationteststore.com" and title "A place to practice your automation skills"

  Scenario Outline: 02 I should be able to Register with valid credentials
    And I can see "Your Personal Details" section
    And I input firstName "FirstName"
    And I input lastName "LastName"
    And I input unique email
    And I input telephone "074000000000"
    And I input fax "074000000001"
    And I can see "Your Address" section
    And I input company "Company Ltd"
    And I input Address one "1 Address Street"
    And I input Address two "Gorton South"
    And I input city "Manchester"
    And I select province or state "Lancashire"
    And I input postcode "M18 7QT"
    And I can see "Login Details" section
    And I input unique loginname
    And I input password "password@123"
    And I input confirm password "password@123"
    And I can see "Newsletter" section
    And tick subscription option Yes
    And I tick Privacy Policy radio button
    And I tap Continue button
    And I can see page url contains "<page url>" and title "<page title>"
    And I tap Continue button in Account success page
    And I can see "Dashboard" and "Welcome back" message in the account page
    And I tap on Logoff icon
    And I can see "Account Logout" header text
    And click on Continue button
    And I can see page url contains "automationteststore.com" and title "A place to practice your automation skills"
    Examples:
      | page url        | page title                     |
      | account/success | Your Account Has Been Created! |