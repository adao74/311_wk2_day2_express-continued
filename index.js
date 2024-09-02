const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const routerComments = require('./routes/comments.js')
const routerContacts = require('./routes/contacts.js')
const routerProducts = require('./routes/products.js')
const routerVehicles = require('./routes/vehicles.js')

app.use(bodyParser.json())

app.use((req, res, next) => {
    next()
})

app.use(express.static('public'))

app.use(routerComments)  // handles all routes in routes/comments.js (i.e. no need to distinguish between the 2 GET methods)
app.use(routerContacts)
app.use(routerProducts)
app.use(routerVehicles)

const port = process.env.PORT || 4001;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
