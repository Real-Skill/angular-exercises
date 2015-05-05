Feature: Anonymous cannot see about info

  Scenario: Anonymous should be redirected
    When I am an anonymous user
    Then I browse to the "/about"
    Then I should see the "login.name" element
    Then I should see the "login.password" element

  Scenario: Anonymous can enter login data
    When I enter "admin" into "login.name" field
    And I enter "admin" into "login.password" field

  Scenario: Admin can see about info
    When I click "login.submitLogin"
    Then I should see "authExercise" in "home.menu.appName"
    Then I should see the "home.dropdown.user" element
    Then I should see "Admin" in "home.dropdown.user"
    Then I should see "What Is Angular?" in "about.header"
