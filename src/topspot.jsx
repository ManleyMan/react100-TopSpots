import React from 'react';

export default props => (
    
    <div className='well'>
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <a className='btn btn-primary' href={props.href}> Click here for location </a>
    </div>
)


