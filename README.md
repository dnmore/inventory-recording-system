# Inventory Recording System

CRUD (Create, Read, Update, Delete) application built using Node.js, Express.js, EJS templating engine and MySQL database.

## Features

- Create, Read, Update and Delete Categories to be associated to Items
- Create, Read, Update the details and associated category and Delete Items

## Stack

- `node.js` JavaScript runtime environment
- `express.js` web framework for node.js
- `EJS` embedded JavaScript templating
- `mysql` relational database management system
- `nodemon` tool automatically restarting the node application when changes are detected

## Database Structure

Database named `inventory` with two tables: `items` and `categories`.
There is a dump in the application directory: **inventory.sql**.
Insert your MySQL credentials in file `data/database.js`.

## Cloning

You can [clone the repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) and install the dependencies with the following command.

```
$ npm install

```

You can run the following command to start the application

```
$ npm start

```

The server will be running on port 3000, visit `http://localhost:3000/`

## License

MIT

