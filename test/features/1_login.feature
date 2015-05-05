Feature: Admin can login

  Scenario: Admin can enter login data
    When I am an anonymous user
    Then I browse to the "/"
    Then I should see the "login.name" element
    Then I should see the "login.password" element
    And I enter "admin" into "login.name" field
    And I enter "admin" into "login.password" field

  Scenario: Admin can login
    And I click "login.submitLogin"
    Then I should see "authExercise" in "home.menu.appName"
    Then I should see "Hello, admin!" in "home.content.header"
    Then I should see the "home.dropdown.user" element
    Then I should see "Admin" in "home.dropdown.user"

  Scenario: Admin can logout
    And I click "home.dropdown.user"
    Then I should see "Logout" in "home.dropdown.logout"
    Then I click "home.dropdown.logout"
    Then I should see the "login.name" element
    Then I should see the "login.password" element
