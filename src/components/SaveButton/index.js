import './style.scss';
import React from 'react'
import { Button } from 'antd'

const DeleteButton = (props) => {
    return (
        <Button type="primary" shape="round" onClick={props.onClick}>
            Save
        </Button>
    )
}

export default DeleteButton;
