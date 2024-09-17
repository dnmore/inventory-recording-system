# Inventory Recording System - CRUD Application

## Overview

This is a CRUD (Create, Read, Update, Delete) application for managing an inventory of items and categories. Built with Node.js, Express.js, and MySQL, it allows users to create and manage inventory records.

## Features

- Create, view, update, and delete categories
- Create, view, update, and delete items associated with categories

## Tech Stack

- `Node.js`– Backend runtime environment
- `Express.js`– Web framework for Node.js
- `EJS`– Templating engine for dynamic content
- `MySQL`– Relational database system
- `Nodemon`– Automatically restarts server upon changes

## Database Structure

The application uses a MySQL database with two tables: `items` and `categories`. The repository includes a SQL dump file (`inventory.sql`) that can be used to set up the database.

## Getting Started
### Installation

Clone the repository and install the dependencies:

```
$ git clone https://github.com/dnmore/inventory-recording-system.git
$ npm install

```

### Database Setup

Set up your MySQL database and insert credentials into `data/database.js`.

### Running the Application

Start the server with:

```
$ npm start

```

The server will be running at `http://localhost:3000/`

## License

This project is licensed under the MIT License.

