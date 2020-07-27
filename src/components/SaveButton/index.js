import './style.scss';
import React from 'react'
import { Button, notification } from 'antd'
import API from '../../utils/api'

const SaveButton = (props) => {

    const openNotification = () => {
        notification.open({
            message: 'Book Saved!',
            description:
              'Your book has been saved to your library!  Access it in the Saved Books page.',
          });
    }

    const saveBook = () => {
        API.saveBook(props.book).then(() => openNotification())

    }

    return (
        <Button type="primary" shape="round" onClick={saveBook}>
            Save
        </Button>
    )
}

export default SaveButton;
