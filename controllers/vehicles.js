const vehicles = require('../data/vehicles.js')

const list = (req, res) => {
    res.json(vehicles)
}

const show = (req, res) => {
    const id = req.params.id
    const returnedVehicle = vehicles.find( vehicle => vehicle._id === parseInt(id))
    res.json(returnedVehicle)
}

const create = (req, res) => {
    const id = vehicles.length + 1
    
    const requestBody = {
        _id: id,  
        ...req.body
    }

    vehicles.push(requestBody)
    res.json(vehicles)
}

module.exports = {
    list,
    show,
    create
}
