const Book = require('../models/BookModel');

module.exports = (router) => {
    router.get('/api/books', (req, res) => {
        Book.find().then((data) => res.json(data));
    });

    router.post('/api/books', (req, res) => {
        const newBook = Book(req.body);
        newBook.save((err) => {
            if (err) return res.status(500).send(err);
            return res.status(200).send(newBook);
        });
    });

    router.delete('/api/books/:id', (req, res) => {
        Book.findByIdAndRemove(req.params.id, (err, res) => {
            if (err) return res.status(500).send(err);
            const response = {
                message: 'Book removed',
                id: res._id,
            };
            return res.status(200).send(response);
        });
    });
};
