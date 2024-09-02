const contacts = require('../data/contacts.js')

const list = (req, res) => {
    res.json(contacts)
}

const show = (req, res) => {
    const id = req.params.id
    const returnedContact = contacts.find( contact => contact._id === parseInt(id))
    res.json(returnedContact)
}

const create = (req, res) => {
    const id = contacts.length + 1
    
    const requestBody = {
        _id: id,  
        ...req.body
    }

    contacts.push(requestBody)
    res.json(contacts)
}

module.exports = {
    list,
    show,
    create
}