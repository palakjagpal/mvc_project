const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

const app = express()

const PORT = 3000

app.set("view engine", "pug")//setting pug as the view engine
app.set("views", "./views") //setting the views directory

app.use(express.static("public")); //serving static files from the public directory
app.use(bodyParser.json()) //middleware to parse JSON request body

app.use(bodyParser.urlencoded({ extended : true})) //middleware to parse the request body

app.use("/users", userRoutes) //mounting the userRoutes at /users

app.get("/", (req, res) => {
    res.render("home") //rendering the home.pug file when the user navigates to the root route
});


app.listen( PORT || 5000, ()=>{
    console.log(`Server running in http://localhost:${PORT}`)
})

