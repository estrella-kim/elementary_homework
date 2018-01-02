import React from 'react';
import '../../css/content.css';
import Watch from '../containers/Watch';

function Content() {
    return (
        <div className ="content">
            컨텐트 영역입니다.
            <Watch/>
            <Watch/>
            <Watch/>
            <Watch/>
            <Watch/>
        </div>
    )
}

export default Content;