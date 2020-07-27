import React from 'react'
import {Typography } from 'antd'
import BookContainer from '../components/BookContainer'

const { Title } = Typography

const books = [
    {
        kind: 'books#volume',
        id: 'zyePPwAACAAJ',
        etag: 'P7i+RG/7IKQ',
        selfLink: 'https://www.googleapis.com/books/v1/volumes/zyePPwAACAAJ',
        volumeInfo: {
            title: 'Brave New World',
            authors: ['Aldous Huxley'],
            publisher: 'Longman',
            publishedDate: '2009-02-27',
            description:
                "Huxley's story shows a futuristic World State where all emotion, love, art, and human individuality have been replaced by social stability. An ominous warning to the world's population, this literary classic is a must-read.",
            industryIdentifiers: [
                {
                    type: 'ISBN_10',
                    identifier: '1405882581',
                },
                {
                    type: 'ISBN_13',
                    identifier: '9781405882583',
                },
            ],
            readingModes: {
                text: false,
                image: false,
            },
            pageCount: 121,
            printType: 'BOOK',
            categories: ['Foreign Language Study'],
            averageRating: 3.5,
            ratingsCount: 2988,
            maturityRating: 'NOT_MATURE',
            allowAnonLogging: false,
            contentVersion: 'preview-1.0.0',
            imageLinks: {
                smallThumbnail:
                    'http://books.google.com/books/content?id=zyePPwAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
                thumbnail:
                    'http://books.google.com/books/content?id=zyePPwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
            },
            language: 'en',
            previewLink:
                'http://books.google.ca/books?id=zyePPwAACAAJ&dq=brave+new+world&hl=&as_pt=BOOKS&cd=1&source=gbs_api',
            infoLink: 'http://books.google.ca/books?id=zyePPwAACAAJ&dq=brave+new+world&hl=&as_pt=BOOKS&source=gbs_api',
            canonicalVolumeLink: 'https://books.google.com/books/about/Brave_New_World.html?hl=&id=zyePPwAACAAJ',
        },
        saleInfo: {
            country: 'CA',
            saleability: 'NOT_FOR_SALE',
            isEbook: false,
        },
        accessInfo: {
            country: 'CA',
            viewability: 'NO_PAGES',
            embeddable: false,
            publicDomain: false,
            textToSpeechPermission: 'ALLOWED',
            epub: {
                isAvailable: false,
            },
            pdf: {
                isAvailable: false,
            },
            webReaderLink:
                'http://play.google.com/books/reader?id=zyePPwAACAAJ&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api',
            accessViewStatus: 'NONE',
            quoteSharingAllowed: false,
        },
        searchInfo: {
            textSnippet:
                'Huxley&#39;s story shows a futuristic World State where all emotion, love, art, and human individuality have been replaced by social stability. An ominous warning to the world&#39;s population, this literary classic is a must-read.',
        },
    },
    {
        kind: 'books#volume',
        id: 'zyePPwAACAAJ',
        etag: 'P7i+RG/7IKQ',
        selfLink: 'https://www.googleapis.com/books/v1/volumes/zyePPwAACAAJ',
        volumeInfo: {
            title: 'Brave New World',
            authors: ['Aldous Huxley'],
            publisher: 'Longman',
            publishedDate: '2009-02-27',
            description:
                "Huxley's story shows a futuristic World State where all emotion, love, art, and human individuality have been replaced by social stability. An ominous warning to the world's population, this literary classic is a must-read.",
            industryIdentifiers: [
                {
                    type: 'ISBN_10',
                    identifier: '1405882581',
                },
                {
                    type: 'ISBN_13',
                    identifier: '9781405882583',
                },
            ],
            readingModes: {
                text: false,
                image: false,
            },
            pageCount: 121,
            printType: 'BOOK',
            categories: ['Foreign Language Study'],
            averageRating: 3.5,
            ratingsCount: 2988,
            maturityRating: 'NOT_MATURE',
            allowAnonLogging: false,
            contentVersion: 'preview-1.0.0',
            imageLinks: {
                smallThumbnail:
                    'http://books.google.com/books/content?id=zyePPwAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
                thumbnail:
                    'http://books.google.com/books/content?id=zyePPwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
            },
            language: 'en',
            previewLink:
                'http://books.google.ca/books?id=zyePPwAACAAJ&dq=brave+new+world&hl=&as_pt=BOOKS&cd=1&source=gbs_api',
            infoLink: 'http://books.google.ca/books?id=zyePPwAACAAJ&dq=brave+new+world&hl=&as_pt=BOOKS&source=gbs_api',
            canonicalVolumeLink: 'https://books.google.com/books/about/Brave_New_World.html?hl=&id=zyePPwAACAAJ',
        },
        saleInfo: {
            country: 'CA',
            saleability: 'NOT_FOR_SALE',
            isEbook: false,
        },
        accessInfo: {
            country: 'CA',
            viewability: 'NO_PAGES',
            embeddable: false,
            publicDomain: false,
            textToSpeechPermission: 'ALLOWED',
            epub: {
                isAvailable: false,
            },
            pdf: {
                isAvailable: false,
            },
            webReaderLink:
                'http://play.google.com/books/reader?id=zyePPwAACAAJ&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api',
            accessViewStatus: 'NONE',
            quoteSharingAllowed: false,
        },
        searchInfo: {
            textSnippet:
                'Huxley&#39;s story shows a futuristic World State where all emotion, love, art, and human individuality have been replaced by social stability. An ominous warning to the world&#39;s population, this literary classic is a must-read.',
        },
    },
];

const Saved = () => {
    return (
        <div>
            <Title>Your saved books</Title>
            <BookContainer books={books} saved />
        </div>
    )
}

export default Saved;
