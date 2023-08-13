@smoke
  Feature: Login in app

    Scenario: Check that Logged in
      Given I open Login page
      When I enter "standard_user" in "Login Page > username" element
      And I enter "secret_sauce" in "Login Page > password" element
      And I click on "Login Page > submit" element
      Then I'm on "Home" page
