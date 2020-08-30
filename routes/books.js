const express = require('express')
const Book = require('../models/book.js')
const Author = require('../models/author.js')
const router = express.Router()



// All books route
router.get('/', async (req,res) => {
    res.send('All Books')
})

// new book route 
router.get('/new', async (req, res) => {
    try {
        const authors = await Author.find({})
        const book = new Book()
        res.render('books/new', {
            authors, book
        })
    } catch {
        res.render('/books')
    }
})

// Create book
router.post('/', async (req,res) => {
    res.send('create Book')
})



module.exports = router 