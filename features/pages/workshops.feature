Feature: Home page

  Background: Navigation
    Given Go to the home page

  Scenario:
    When User navigate to the "Workshops" page
    When User clicks on "React hooks" card
    When User fills in their first name "John"
    When User fills in their last name "Doe"
    When User fills in their email address "john.doe@example.com"
    When User clicks the "Sign up" button
    Then User sees the title "You have successfully signed up for React hooks workshop!"
