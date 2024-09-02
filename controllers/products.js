const products = require('../data/products.js')

const list = (req, res) => {
    res.json(products)
}

const show = (req, res) => {
    const id = req.params.id
    const returnedProduct = products.find( product => product._id === parseInt(id))
    res.json(returnedProduct)
}

const create = (req, res) => {
    const id= products.length + 1
    
    const requestBody = {
        _id: id,  
        ...req.body
    }

    products.push(requestBody)
    res.json(products)
}

module.exports = {
    list,
    show,
    create
}
