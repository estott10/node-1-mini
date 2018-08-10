let books= [];
let id= 0;

module.exports= {
    read: (req, res) => {
        res.status(200).send(books);
    },
    create: (req, res) => {
        const {title, author} = req.body;
        let newBook = {
            title: title,
            author: author,
            id: id
        }    
        books.push(newBook);
        id++;
        res.status(200).send(books);
    },
    update: (req, res) => {
        const {id} = req.params;
        for(var i= 0; i< books.length; i++){
        if(books[i].id === id){
            books[i] = req.body;
        }
        }
        res.status(200).send(books);
    },
    delete: (req, res) => {
        books.forEach( (book, i) => {
            if(book.id === req.params.id){
                books.splice(i, 1);
            }
        } );
        res.status(200).send(books);
    }   

};

