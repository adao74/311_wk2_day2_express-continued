const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const contacts = require("./data/contacts")
const vehicles = require("./data/vehicles")
const comments = require("./data/comments")
const products = require("./data/products")

app.use(express.static('public'))
app.use(bodyParser.json())

app.get("/contacts", (req, res) => {
    res.json(contacts)
})

app.get("/vehicles", (req, res) => {
    res.json(vehicles)
})

app.get("/comments", (req, res) => {
    res.json(comments)
})

app.get("/products", (req, res) => {
    res.json(products)
})

app.get("/contacts/:id", (req, res) => {
    const id = req.params.id
    const returnedContact = contacts.find( contact => contact._id === parseInt(id))
    res.json(returnedContact)
})

app.get("/vehicles/:id", (req, res) => {
    const id = req.params.id
    const returnedVehicle = vehicles.find( vehicle => vehicle._id === parseInt(id))
    res.json(returnedVehicle)
})

app.get("/comments/:id", (req, res) => {
    const id = req.params.id
    const returnedComment = comments.find( comment => comment._id === parseInt(id))
    res.json(returnedComment)
})

app.get("/products/:id", (req, res) => {
    const id = req.params.id
    const returnedProduct = products.find( product => product._id === parseInt(id))
    res.json(returnedProduct)
})

app.post("/contacts", (req, res) => {
    const id = contacts.length + 1
    
    const requestBody = {
        _id: id,  
        ...req.body
    }

    contacts.push(requestBody)
    res.json(contacts)
})

app.post("/vehicles", (req, res) => {
    const id = vehicles.length + 1
    
    const requestBody = {
        _id: id,  
        ...req.body
    }

    vehicles.push(requestBody)
    res.json(vehicles)
})

app.post("/comments", (req, res) => {
    const id = comments.length + 1
    
    const requestBody = {
        _id: id,  
        ...req.body
    }

    comments.push(requestBody)
    res.json(comments)
})

app.post("/products", (req, res) => {
    const id = products.length + 1
    
    const requestBody = {
        _id: id,  
        ...req.body
    }

    products.push(requestBody)
    res.json(products)
})

const port = process.env.PORT || 4001;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
