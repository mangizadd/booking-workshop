const express = require('express')
const hbs = require('express-handlebars').create({
    extname: '.hbs'
})

const homeControler = require('./controlers/homeControler')
const catalogControler = require('./controlers/catalogControler')

const errorControler = require('./controlers/errorControler')

const app = express()
app.engine('.hbs', hbs.engine)
app.set('view engine', '.hbs')
app.use(express.urlencoded({ extended: false }))
app.use('/static', express.static('static'))

app.use(homeControler)
app.use('/about', homeControler)
app.use('/catalog', catalogControler)
app.use('/catalog/:id', catalogControler)



app.all('*', errorControler)





app.listen(3000, () => console.log('Server started on port 3000'))


