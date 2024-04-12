const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use('/', require('./router'));

app.use(express.static(__dirname));

app.listen(8000, () => {
    console.log('listening on http://localhost:8000');
});