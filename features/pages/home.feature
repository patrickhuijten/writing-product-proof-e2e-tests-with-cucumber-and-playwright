Feature: Home page

  Background: Navigation
    Given Go to the home page

  Scenario:
    Then User sees the title "The coolest pre-event of JS conference 2024"

  Scenario:
    Then User sees the navigation links "Home, About, Contact, Speakers, Sponsors, Workshops"
