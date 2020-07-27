import './style.scss';
import React from 'react'
import { Button } from 'antd'

const DeleteButton = (props) => {
    return (
        <Button type="default" shape="round" onClick={props.onClick}>
            View
        </Button>
    )
}

export default DeleteButton;
