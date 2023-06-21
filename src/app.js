const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()

//Define paths for express config
const viewsPath = path.join(__dirname, '../template/views')
const public_dir_path = path.join(__dirname, '../public')
const partialsPath = path.join(__dirname, '../template/partials')

//Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory to server
app.use(express.static(public_dir_path))


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Roshan Karanth'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About Me",
        name: "not me"

    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: "help",
        name: "no help here"
    })
})

app.get('/help/*', (req, res) => {
    res.render('404helppage', {
        title: "404 page",
        name: "Roshan Karnath",
        error: "Help page not found"
    })

})

app.get('*', (req, res) => {
    res.render('404page', {
        title: '404 page',
        name: 'Roshan Karanth',
        error: 'Page not found'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})


//what is localhost ?
