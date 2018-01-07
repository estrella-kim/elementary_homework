import React from 'react';
import '../../css/content.css';
import Watch from '../containers/Watch';
import Time from '../containers/Time';

function Content() {
    return (
        <div className ="content">
            컨텐트 영역입니다.
            <Time/>
        </div>
    )
}

export default Content;