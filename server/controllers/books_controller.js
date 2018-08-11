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
    
    update: ( req, res ) => {
        let index = null;
        books.forEach((book, i) => {
          if(book.id === Number(req.params.id)) index = i;
        })
        books[ index ] = {
          id: books[ index ].id,
          title: req.body.title || books[ index ].title,
          author: req.body.author || books[ index ].author
        };
        res.status(200).send( books );
      },

    // update: (req, res) => {
    //     const {id} = req.params;
    //     for(var i= 0; i< books.length; i++){
    //     if(books[i].id === id){
    //         books[i] = req.body;
    //     }
    //     }
    //     res.status(200).send(books);
    // },

    delete: ( req, res ) => {
        let index = null;
        books.forEach((book, i) => {
          if(book.id === Number(req.params.id)) index = i;
        })
        books.splice(index, 1)
        res.status(200).send( books );
      }
    };
//     delete: (req, res) => {
//         books.forEach( (book, i) => {
//             if(book.id === req.params.id){
//                 books.splice(i, 1);
//             }
//         } );
//         res.status(200).send(books);
//     }   

// };

