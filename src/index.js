const express = require('express');
const expressHandlebars = require('express-handlebars');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const Handlebars = require('handlebars');
const route = require('./routes/routes');
const db = require('./config/db/connect');

db.connect();

const app = express();
const port = 3000;

Handlebars.registerHelper('step', function (value, step) {
    return value + step;
});

// lay file anh tu public/img
app.use(express.static(path.join(__dirname, 'public')));

// dinh dang du lieu khi keo tu mongo xuong
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// setup handlebars
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//
route(app);

app.listen(port, () => console.log(`connect to ${port} done`));
