const express = require('express')
const Author = require('../models/author')
const router = express.Router()



// All authors 
router.get('/', async (req,res) => {
    let searchOptions = {}
    if(req.query.name != null && req.query.name != '') {
        searchOptions.name = new RegExp(req.query.name, 'i')
    }
    try {
        const authors = await Author.find(searchOptions)
        res.render('authors/index', { authors: authors, searchOptions: req.query })

    } catch(err) {
        res.redirect('/')
        console.log(err)
    }
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