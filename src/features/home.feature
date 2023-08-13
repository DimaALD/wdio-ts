@home
  Feature: Home Page test

    Background:
      When I login as "standard_user" user
      Then I'm on "Home" page

    Scenario: Check Sidebar options
      When I click on "Home page > Header > Burger Button" element
      And I click on "Home page > Header > Burger Options > 2 Option" element
