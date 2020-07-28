import './style.scss';
import React from 'react';
import { Card, Typography, Row, Col, Divider } from 'antd';
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
        buttons = [<ViewButton book={props.book} />, <DeleteButton book={props.book} removeBook={props.removeBook} />];
    } else {
        buttons = [<ViewButton book={props.book} />, <SaveButton book={props.book} />];
    }

    const { title, author, description, image } = props.book;

    const cardDescription = (
        <>
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
            // cover={<img alt={title} src={image} />}
            actions={buttons}
            hoverable
        >
            {/* <p className="author">{author}</p>
            testing */}

            <Row gutter={16} style={{ marginBottom: 10 }}>
                <Col className="gutter-row" span={12}>
                    {image ? <img alt={title} src={image} /> : ''}
                </Col>
                <Col className="gutter-row" span={12}>
                    <p className="aboutString">{title}</p>
                    <p> {author}</p>
                </Col>
            </Row>
            <Divider />
            <Meta description={cardDescription} />
        </Card>
    );
};

export default Book;
