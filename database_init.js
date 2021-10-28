const db = require('./config/database')
const fs = require("fs")

const Book = require("./models/book")
const Category = require("./models/category")
const Author = require("./models/author")
const BookAuthors = require("./models/book_author")
const BookCategories = require("./models/book_category")

// createTables()
// readData()

async function createTables(){
    await db.sync({ force: true })
    console.log("All models were synchronized successfully.")
}

function readData(){
    try{
        const jsonString = fs.readFileSync("./books.json")
        const data = JSON.parse(jsonString)
        Category.bulkCreate(readCategories(data))
        Author.bulkCreate(readAuthors(data))
        readBooks(data)
    }catch(err){
        console.log(err)
        return;
    }
}

function readCategories(data){
    let categories = []
    for (let i = 0; i < data.length; i++){
        const names = data[i].categories
        for(let c = 0; c < names.length; c++){
            categories.push({ name: names[c] })
        }
    }

    let uniqueCategories = [
        ...new Map(categories.map((item) => [item["name"], item])).values()
    ]
    return uniqueCategories
}

function readAuthors(data) {
    let authors = []
    for (let i = 0; i < data.length; i++){
        const names = data[i].authors
        for (let a = 0; a < names.length; a++){
            authors.push({ name: names[a] })
        }
    }
    let uniqueAuthors = [
        ...new Map(authors.map((item) => [item["name"], item])).values()
    ]
    return uniqueAuthors
}

async function readBooks(data){
    for(let i = 0; i < data.length; i++){
        let book = await Book.create({
            title: data[i].title,
            isbn: data[i].isbn,
            pageCount: data[i].pageCount,
            shortDescription: data[i].shortDescription,
            longDescription: data[i].longDescription,
            publishedDate: data[i].publishedDate.$date
        })
        let names = data[i].authors
        for (let a = 0; a < names.length; a++){
            const author = await Author.findOne({
                where: { name: names[a] },
                attributes: ['id'],
                raw: true,
            })
            await BookAuthors.create({BookId: book.id, AuthorId: author.id})
        }
        names = data[i].categories
        for (let a = 0; a < names.length; a++){
            const category = await Category.findOne({
                where: { name: names[a] },
                attributes: ['id'],
                raw: true,
            })
            await BookCategories.create({BookId: book.id, CategoryId: category.id})
        }
    }
}