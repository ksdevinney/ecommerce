# E-Commerce Back End

## About

This application is the server-side back end of an e-commerce website. It uses a database and command line tools to store information useful for an online shop. You can post, view, edit, and delete items from the store. You can also use categories and tags for classifying items.

## Development

For this databse, each class is represented by a different table in the database. RESTful API routes are used to view, edit, post, and delete products, categories, and tags. The database is filled using Express commands in the JavaScript file. Because there is no front end, an API server, such as Insomnia, must be used.

## How to use

1. Navigate to the repository you wish to use. 
1. Download the code by typing `git clone https://github.com/ksdevinney/ecommerce.git` in the command line.
1. Create the database by copying the contents of the schema.sql file into MySQL Workbench. 
1. Seed the database with test data (if desired) using `npm run seed`
1. Install other necessary packages by running `npm i`
1. Run `npm start` and open Insomnia to begin using the database

## Links

A video demonstrating the functionality of this application can be found [here](youtube.com)
