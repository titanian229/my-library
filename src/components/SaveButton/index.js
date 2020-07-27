import './style.scss';
import React from 'react'
import { Button } from 'antd'
import API from '../../utils/api'

const SaveButton = (props) => {

    const saveBook = () => {
        API.saveBook(props.book)
    }

    return (
        <Button type="primary" shape="round" onClick={saveBook}>
            Save
        </Button>
    )
}

export default SaveButton;
