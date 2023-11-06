const mg= require('mongoose')
const books= new mg.Schema({
    title:String,
    author:String,
    summary:String
     
})

const Book = mg.model('BookTable',books)

module.exports=Book
