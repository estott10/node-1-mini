const express= require('express');

const bodyParser= require('body-parser');

const app= express();

const bc= require(`./controllers/books_controller.js`)

app.use(bodyParser.json());

axios.get(`/api/books`, bc.read);

const port= 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
} );