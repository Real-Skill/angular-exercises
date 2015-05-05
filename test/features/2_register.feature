Feature: User can register

  Scenario: User go to register state
    When I am an anonymous user
    Then I browse to the "/"
    And I click "login.register"
    Then I should be directed to "/register"
    Then I should see the "register.login" element
    Then I should see the "register.password" element
    Then I should see the "register.retype_password" element

  Scenario: User can enter registration data
    When I enter "user" into "register.login" field
    Then I enter "user" into "register.password" field
    Then I enter "user" into "register.retype_password" field

  Scenario: User register and is logged in with new account
    When I click "register.submit"
    Then I should see "authExercise" in "home.menu.appName"
    Then I should see "Hello, user!" in "home.content.header"
    Then I should see the "home.dropdown.user" element
    Then I should see "User" in "home.dropdown.user"

  Scenario: User can logout
    And I click "home.dropdown.user"
    Then I should see "Logout" in "home.dropdown.logout"
    Then I click "home.dropdown.logout"
    Then I should see the "login.name" element
    Then I should see the "login.password" element
