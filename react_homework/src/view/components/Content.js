import React from 'react';
import '../../css/content.css';
import Time from '../containers/Time';

function Content() {
    return (
        <div className ="content">
            컨텐트 영역입니다.
            <Time/>
            <Time/>
            <Time/>
            <Time/>
            <Time/>
            <Time/>
        </div>
    )
}

export default Content;