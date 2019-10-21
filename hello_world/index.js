const express = require('express');
// const bodyparse = require('body-parse');
const app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({
    extended: true
})) // for parsing application/x-www-form-urlencoded

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index', {
        name: 'name var',
    })
})

app.get('/form', (req, res) => {
    res.render('user/index')
})

app.get('/form/get', (req, res) => {
    res.render('user/index', {
        query: req.query
    })
})

app.post('/form/post', (req, res) => {
    res.render('user/index', {
        query: req.query
    })
})

app.listen(3000, () => {
    console.log('App listening on port 3000! http://localhost:3000');
});