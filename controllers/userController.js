// user is a model that interacts with the database
//It will contain functions that will be called by the controller functions to perform database operations
const User = require('../models/UserModel')

//UUID package to generate unique ids for new users
//It is used in the addUser function to generate a unique id for each new user
const { v4: uuidv4 } = require("uuid")

//This function will render the form to add a new user
// It will be called when the user navigates to /users/add
function getUsers(req,res){
    res.render("userList", {users: User.getAll()});
}

//This function shows the form to add a new user
// It will be called when the user navigates to /users/add  
function showAddForm(req,res){
    res.render("addUser")
}

function addUser(req,res){
    const { name } = req.body; //get the name from the request body
    User.add({ id: uuidv4(), name}) //generate a unique id and add the new user to the database
    res.redirect("/users") //redirect to the user list page
}

function showEditForm(req,res){
    const user = User.getById(req.params.id) //get the user to be edited from the database using the id from the route parameter
    res.render("editUser", { user }) //render the edit form and pass the user data to it
}

function updateUser(req,res){
    const { name } = req.body //get the updated name from the request body
    User.update(req.params.id, { id: req.params.id, name}) //update the user in the database using the id from the route parameter
    res.redirect("/users") //redirect to the user list page
}

function deleteUser(req,res){
    User.remove(req.params.id) //remove the user from the database using the id from the route parameter
    res.redirect("/users") //redirect to the user list page
}

//exporting the controller functions to be used in userRoutes.js
exports.getUsers = getUsers
exports.showAddForm = showAddForm
exports.addUser = addUser
exports.showEditForm = showEditForm
exports.updateUser = updateUser
exports.deleteUser = deleteUser