import './style.scss';
import React from 'react'
import { Button } from 'antd'

const DeleteButton = (props) => {
    return (
        <Button type="default" danger shape="round" onClick={props.onClick}>
            Delete
        </Button>
    )
}

export default DeleteButton;
