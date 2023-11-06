# BrewApps

API Endpoints and Usage

/getallbooks
method:GET
Lists all books with details

/getbookbyid/id
method:GET
Gets details of book by its id

/addnewbook

method:POST
Saves details of book as a record

/updatebookbyid/id
method:PUT 
Updates details of book according to its id

/deletbookbyid/id
method:DELETE
Delete particular book record by its id

Install mongoose, node and express in a project
Run local instance of mongodb or connect to atlas server using connection string.
Run app.js file
Call specific endpoint from postman.

Assumptions Made:ID is generated automatically in DB,
Delete and Update details to be happened based upon ID only as it will be unique identifier for books.
