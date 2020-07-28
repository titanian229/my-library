import './style.scss';
import { Pagination } from 'antd';
import React from 'react';

const PageButtons = (props) => {
    return (
        <div style={{margin: "1em 0", display: "flex", justifyContent: "center"}}>
            <Pagination defaultCurrent={1} total={props.totalItems} onChange={props.movePage}/>
        </div>
    );
};

export default PageButtons;
