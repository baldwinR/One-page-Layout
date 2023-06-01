const express = require('express');
const ejs = require('ejs');

const app = express();

app.use(express.static('public'));
app.set('view engine','ejs');

let background = '';

app.get('/', (req, res) => {
    res.render('home', {
        title: 'Summer',
        background: 'summer.jpg',
        header: 'background-color: #2F86A6',
        nav: 'background-color: #34BE82',
        content: 'background-color: #2FDD92',
        extra: 'background-color:#E7FBBE',
        footer: 'background-color:#F2F013'
    });
});

app.get('/autumn', (req, res) => {
    res.render('home', {
        title: 'Autumn',
        background: 'autumn.jpg',
        header: 'background-color: #EA5C2B',
        nav: 'background-color: #FF7F3F',
        content: 'background-color: #F6D860',
        extra: 'background-color:#E7FBBE',
        footer: 'background-color:#95CD41'
    });
});

app.get('/winter', (req, res) => {
    res.render('home', {
        title: 'Winter',
        background: 'winter.jpg',
        header: 'background-color: #EFFFFD',
        nav: 'background-color: #B8FFF9',
        content: 'background-color: #85F4FF',
        extra: 'background-color:#E7FBBE',
        footer: 'background-color:#42C2FF'
    });
});

app.get('/spring', (req, res) => {
    res.render('home', {
        title: 'Spring',
        background: 'spring.jpg',
        header: 'background-color: #65C18C',
        nav: 'background-color: #C1F4C5',
        content: 'background-color: #FFBED8',
        extra: 'background-color:#E7FBBE',
        footer: 'background-color:#FF7BA9'});
});

app.listen(3000, ()=>{
    console.log('Server started on port 3000')
})