
import React from 'react';
import './my.css';

const MyComponent = (props) => {
    return (
        <div className='my-component'>
            {props.count}
        </div>
    );
};

export default MyComponent;

