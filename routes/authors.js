const express = require('express')

const router = express.Router()

const Author = require('../models/author')

router.get('/',async(req,res)=>{
    let searchOptions={}
    if(req.query.name != null && req.query.name !== ''){
        searchOptions.name = new RegExp(req.query.name,'i')
    }
    try{
        const authors = await Author.find(searchOptions)
        res.render('authors/index',{
            authors :authors,
            searchOptions: req.query
        })
    }catch{
        res.redirect('/')
    }
})

router.get('/new',(req,res)=>{
    res.render('authors/new', {author: new Author()}) 
})

// router.post('/',(req,res)=>{
//     const author = new Author({
//         name: req.body.name
//     })
//     author.save((err,newAuthor)=>{
//         if(err){
//             res.render('authors/new',{
//                 author:author,
//                 errorMessage:'error creating Author'
//             })
//         }else {
//             // res.redirect(`authors/${newAuthor.id}`)
//             res.redirect('authors')
//         }
//     })
// })

router.post('/', async (req, res) => {
    const author = new Author({
        name: req.body.name
    });
    
    try {
        const newAuthor = await author.save();  // Save returns a promise
        // Redirect to the new author's page (you can update this if needed)
        // res.redirect(`authors/${newAuthor.id}`);
        res.redirect('authors')
    } catch (err) {
        res.render('authors/new', {
            author: author,
            errorMessage: 'Error creating Author'
        });
    }
});
module.exports = router