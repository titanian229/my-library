import './style.scss';
import React from 'react'
import { Button } from 'antd'
import API from '../../utils/api'

const DeleteButton = (props) => {
    return (
        <Button type="default" danger shape="round" onClick={() => console.log(props.book._id)}>
            Delete
        </Button>
    )
}

export default DeleteButton;
// () => {API.deleteBook(props.book._id)}