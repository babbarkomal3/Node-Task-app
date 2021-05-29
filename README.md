# Node-Task-app
I've used node.js,express.js,mongodb,mongoose,rest api's to build this project. This is basically a CRUD operation based project. Firstly a restful API is created , then CRUD operation follows by having 4 methods( POST,GET,PATCH,DELETE ) .
These all will work on postman to create , read ,  update , delete tasks. The main advantage of building this project is that we can do all the crud operations in a sorted manner.

app.post is used to set up a POST request handler for /users. The handler function creates a new instance of the user and task model and saves it to the database.

app.get is used to set up a GET request handler for /users/:id. :id serves as a placeholder for the ID of the user to fetch. If the request is GET /users/321, then the ID will be 321. This is known as a URL parameter, and we can access the value for URL parameters on req.params.

app.patch is used to set up the Express route handler.The URL structure is /resources/:id for updating an individual resource by its ID. If we want to update an individual task with the ID of 44, it would be PATCH /tasks/44.

app.delete is used to set up the Express route handler.. The URL structure is /resources/:id for deleting an individual resource by its ID. If we want to delete an individual task with the ID of 897, it would be DELETE /tasks/897

The router defined in the file added into the Express application in index.js. This is done by loading the router in with require and then passing the router Version 1.0 78 to app.use. we can set up as many routers as we need for your application, though it’s common to have a router for each distinct resource our REST API has.


