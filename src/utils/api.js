const axios = require('axios');

export default {
    getGoogleBook: (searchString) => {
        return axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${encodeURI(searchString)}&printType=books&maxResults=40`
        );
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
    getGoogleBookPage: (searchString, startInd = 0, maxResults=10) => {
        if (maxResults > 40) maxResults = 40
        return axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${encodeURI(searchString)}&printType=books&maxResults=${maxResults}&startIndex=${startInd}`
        );
    },
};
