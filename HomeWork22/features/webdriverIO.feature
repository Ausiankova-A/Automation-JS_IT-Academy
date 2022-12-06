Feature: WebdriverIO website testing

Background: 
Given I navigate to the "https://webdriver.io/" page

  Scenario: As a user, I can go on Allure Reporter page
    When I click on "Navigation Bar > DocsDropDown" button
    And I click on "Docs > ReporterDropDown" button
    And I click on "Docs > AllureReporterPage" button
    Then I expect element "Allure Reporter > AllureReporterHeadline" should be equal "Allure Reporter"

  Scenario: As a user, I want open "Getting Started" page from the footer
    When I scroll to the "Main Page > FooterAria"
    And I click on "Footer > GettingStartedPage" button
    Then I expect url contains "https://webdriver.io/docs/gettingstarted"

Scenario: As a user, I want that the first link in the search results contain the word "github"
    Then I click on "Navigation Bar > SearchField" button
    And I search by phrase "github"
    Then I expect url contains "github"