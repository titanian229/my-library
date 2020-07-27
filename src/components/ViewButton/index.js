import './style.scss';
import React from 'react';
import { Button } from 'antd';

const DeleteButton = (props) => {
    return (
        <a href={props.book.link} target="_blank" rel="noopener noreferrer">
            <Button type="default" shape="round" onClick={() => {}}>
                View
            </Button>
        </a>
    );
};

export default DeleteButton;
