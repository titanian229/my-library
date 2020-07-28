import './style.scss';
import React from 'react';
import { Button, Popconfirm, message } from 'antd';

const DeleteButton = (props) => {
    const deleteBookClick = () => {
        props.removeBook(props.book)
        message.success('Deleted')
    };

    return (
        <Popconfirm
            title="Are you sure delete this book?"
            onConfirm={deleteBookClick}
            onCancel={() => console.log('cancelled')}
            okText="Delete"
            cancelText="Cancel"
        >
            <Button type="default" danger shape="round">
                Delete
            </Button>
        </Popconfirm>
    );
};

export default DeleteButton;
