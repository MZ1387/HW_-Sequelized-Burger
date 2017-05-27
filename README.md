# HW_Sequelized-Burger

In this assignment, I created a burger logger with MySQL, Node, Express, Handlebars and Sequelize.

## Live Link (Heroku)
- http://mr-burgers-sequelize.herokuapp.com/

## Concepts Implemented

- MVC
- Handlebars
- DATABASE: GET, POST, PUT methods
- Working with npm packages: express, body-parser, MySQL


## Code Explanation

- A user enters the type of burger that they would like and using the POST method the DATABASE is updated with new information which in turn updates out HANDLEBARS index.
- When the user clicks on the 'Eat Burger' button the DATABASE is updated with a BOOLEAN of the burgers status. When the burger is eaten it is then place in the eaten table of the HANDLEBARS index page.
