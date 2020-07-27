import './style.scss';
import React from 'react';
import { Card } from 'antd';
import DeleteButton from '../DeleteButton'
import SaveButton from '../SaveButton'
import ViewButton from '../ViewButton'
const { Meta } = Card;

const Book = (props) => {
    //has two buttons passed in, has raw book json passed in, 
    let buttons;
    if (props.saved) {
        buttons = ([
            <ViewButton />,
            <DeleteButton />
        ])
    } else {
        buttons = ([
            <ViewButton />,
            <SaveButton />
        ])
    }

    // const {title, author, description, image, link} = props
    const { title, author, description, image, link } = bookReturnParser(props.book);

    const cardDescription = (
        <>
            <p>
                {title} by {author}
            </p>
            <p>{description}</p>
            <p>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    See this book online
                </a>
            </p>
        </>
    );

    return (
        <Card
            // style={{ width: 320 }}
            cover={<img alt={title} src={image} />}
            actions={buttons}
            hoverable
        >
            {/* <p className="author">{author}</p>
            testing */}
            <Meta title={title} description={cardDescription} />
        </Card>
    );
};

export default Book;

function bookReturnParser(bookData) {
    const {
        title,
        authors,
        publishedDate,
        description,
        pageCount,
        imageLinks: { thumbnail: image },
        infoLink,
    } = bookData.volumeInfo;

    return { title, author: authors.join(', '), publishedDate, description, pageCount, image, link: infoLink };
}
