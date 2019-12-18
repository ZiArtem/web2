const express = require('express')
const mongoose = require('mongoose')
const exphbr = require('express-handlebars')
const delivRouts = require ('./routers/delivery')
var  static  =  require ('node-static')
const PORT = process.env.PORT || 3000

const app = express()
const hbs = exphbr.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')
app.use(express.urlencoded({extended:true}))

app.use(delivRouts)
//app.use(express.static("/view/images/"))

async function start() {
    try {
        await mongoose.connect(
            'mongodb+srv://shadow:isjef23fsfeAv3@cluster0-hgbu9.mongodb.net/delivery',
            {
                useNewUrlParser: true,
                useFindAndModify: false
            }
        )
        app.listen(PORT, () => {
            console.log('Server has been started')
        })
    } catch (e) {
        console.log(e)
    }
}

start ()
