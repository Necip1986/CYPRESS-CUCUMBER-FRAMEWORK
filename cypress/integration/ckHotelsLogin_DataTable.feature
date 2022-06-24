Feature: Login Function


    @Manager1
    Scenario: Login with valid credentials
      Given go to url
      And click login link
      And enter below creds for login
      |username|username|
      |Manager|Manager2!|
      And click on login button
      Then verify login successfull

    @Manager2
    Scenario: Login with valid credentials 2
      Given go to url
      And click login link
      And enter below creds for login
      |username|username|
      |Manager|Manager2!|
      And click on login button
      Then verify login successfull
      