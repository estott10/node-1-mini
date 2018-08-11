const express= require('express');

const bodyParser= require('body-parser');

const cors= require('cors');

const app= express();

const bc= require(`./controllers/books_controller.js`)

app.use(cors());

app.use(bodyParser.json());

axios.get(`/api/books`, bc.read);
axios.post(`/api/books`, bc.create);
axios.put(`./app/books/:id`, bc.update);
axios.delete(`./app/books/:id`, bc.delete);

const port= 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
} );