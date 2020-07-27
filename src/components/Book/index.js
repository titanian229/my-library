import './style.scss';
import React from 'react';
import { Card, Typography } from 'antd';
import DeleteButton from '../DeleteButton';
import SaveButton from '../SaveButton';
import ViewButton from '../ViewButton';

const { Paragraph } = Typography;
const { Meta } = Card;

const Book = (props) => {
    // const [bookData, setBookdata] = useState(null)

    //has two buttons passed in, has raw book json passed in,
    let buttons;
    if (props.saved) {
        buttons = [<ViewButton book={props.book} />, <DeleteButton book={props.book} />];
    } else {
        buttons = [<ViewButton book={props.book} />, <SaveButton book={props.book} />];
    }

    const { title, author, description, image } = props.book;

    const cardDescription = (
        <>
            <p>
                {title} by {author}
            </p>
            <Paragraph ellipsis={{ rows: 3, expandable: true, symbol: 'more' }}>{description}</Paragraph>
            {/* <p>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    See this book online
                </a>
            </p> */}
        </>
    );

    return (
        <Card
            className="bookCard"
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

// function bookReturnParser(bookData) {
//     const {
//         title,
//         authors,
//         publishedDate,
//         description,
//         pageCount,
//         imageLinks: { thumbnail: image },
//         infoLink,
//     } = bookData.volumeInfo;

//     return { title, author: authors.join(', '), publishedDate, description, pageCount, image, link: infoLink };
// }
