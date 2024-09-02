const comments = require('../data/comments.js')

const list = (req, res) => {
    res.json(comments)
}

const show = (req, res) => {
    const id = req.params.id
    const returnedComment = comments.find( comment => comment._id === parseInt(id))
    res.json(returnedComment)
}

const create = (req, res) => {
    const id = comments.length + 1
    
    const requestBody = {
        _id: id,  
        ...req.body
    }

    comments.push(requestBody)
    res.json(comments)
}

module.exports = {
    list,
    show,
    create
}
