const axios = require('axios');

export default {
    getGoogleBook: (title) => {
        console.log(`https://www.googleapis.com/books/v1/volumes?q=${encodeURI(title)}&printType=books`);
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${encodeURI(title)}&printType=books`);
    },
    getBooks: () => {
        return axios.get('/api/books');
    },
    saveBook: (book) => {
        return axios.post('/api/books', book);
    },
    deleteBook: (bookId) => {
        return axios.delete(`/api/books/${bookId}`);
    },
};
