Feature: Google Search


Scenario Outline: Google with scenario outline
  Given go to url
  Then search for "<capitals>"
  Then verify the result has "<capitals>"
Examples: test data
|capitals |
|London   |
|Paris    |
|New York |
|Tokyo    |
|Istanbul |
 