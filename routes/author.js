const express = require('express')
const Author = require('../models/author')
const router = express.Router()



// All authors 
router.get('/', (req,res) => {
    res.render('authors/index')
})

// new auther route 
router.get('/new', (req, res) => {
    res.render('authors/new', { author: new Author() })
})

// Create Authors
router.post('/', async (req,res) => {
    const author = new Author({
        name: req.body.name
    })

    try{
const newAuthor = await author.save()
        // res.redirect(`authors/${newAuthor.id}`)
            res.redirect('authors')
    } catch{
 let locals = {errorMessage: 'Error Creating Author'}
            res.render('authors/new', {
                author, locals})
    }
})



module.exports = router 