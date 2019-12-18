  
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const exphbr = require('express-handlebars')
const delivRouts = require ('./routers/delivery')
var  static  =  require ('node-static')
//const PORT =process.env.PORT || 5000
const bodyParser = require('body-parser')

const app = express()
const hbs = exphbr.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')
app.use(express.urlencoded({extended:true}))

app.use('/views/images/', express.static('./views/images'));

app.use(express.json())
app.use(bodyParser.urlencoded({limit:'10mb',extended:false}))

app.use(delivRouts)
//app.use(express.static("/view/images/"))

/*async function start() {
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
*/

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false })

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

app.listen(process.env.PORT || 5000)