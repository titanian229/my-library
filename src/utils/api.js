const axios = require('axios');

export default {
    getGoogleBook: (title) => {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${encodeURI(title)}&printType=books&maxResults=30`);
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
