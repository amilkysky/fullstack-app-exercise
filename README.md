## This is a practice full stack app exercise

By Daphne Dang

## TODO

* Create title
* Create image URL input bar
* Save user-inputted URLs into database
* Display 4 most recent images on webpage
* Images will have titles and captions

## Instructions for creating a full stack app from scratch

### Basic Setup

* Create project directory
* Run `git init`
* Create Github repository
* Run `npm init` to create package.json
* Commit package.json and push to Github

### Directory Setup

* Create `client` directory with `dist` and `src` subdirectories
* Create `index.html` and `styles.css` files in `dist` directory
* Create `components` subdirectory in `src` directory
* Create `index.js` file in `src` directory
* Create `server` directory
* Create `index.js` file in `server` directory
* Create `db` directory
* Create `index.js` file in `db` directory

### Webpack Setup

* Reference https://www.valentinog.com/blog/react-webpack-babel/
* Run npm install webpack, cli, loaders, presets
* Create `webpack.config.js` file
* Use webpack boilerplate code
* Create `SRC` and `DIST` variables to define Webpack points of input and output
* Create npm scripts to watch Webpack and nodemon to watch server

### Database

* Create directory for SQL queries
* Create new database from command line
* Design schema
* Create necessary table(s) from command line
* Test database functionality via INSERT query on command line
* Install db driver so that node can talk to db (e.g., reference https://node-postgres.com/ and use PORT 5432 if using PostgreSQL)
* Connect db driver to database, using database server configuration settings
* Write query helper functions and export via module.exports object to be used by server

### Server

* Install Express
* Write server route handlers
* Listen on PORT 3000
* Send Postman GET request to test routes

### Client

* Install necessary dependencies, e.g. react, react-dom, axios, shortid, etc.
* Create index.html layout
* Create index.js to render app
* Create App component
* Create necessary child components
* Style CSS

### Troubleshooting Tips

* Check webpage for visual cues
* Check Chrome console for errors
* Check node console for errors
* Check Webpack for errors
* Check matching brackets and curly braces / scope
* Insert console.logs where inputs / outputs occur
* Use React Dev Tools to troubleshoot on client side

