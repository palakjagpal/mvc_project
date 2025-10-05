const express = require('express')
const router = express.Router()
const userController =  require('../controllers/userController')

//This route is to get all users
router.get("/", userController.getUsers)

//This route is to add a new user
router.get("/add", userController. showAddForm)
router.post("/add", userController.addUser)

//This route is to edit a user
router.get("/edit/:id", userController.showEditForm)
router.post("/edit/:id", userController.updateUser)
// :id is a route parameter that will be used to identify which user to edit and it will be passed to the controller function as req.params.id

//This route is to delete a user
router.get("/delete/:id", userController.deleteUser)

//exporting the router to be used in app.js
module.exports = router