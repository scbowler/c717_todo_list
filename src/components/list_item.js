import React from 'react';

export default props => {

    const { title, complete } = props.listItem;

    // let itemClass = 'text-danger';

    // if(complete){
    //     itemClass = 'text-success';
    // }

    return <li className={`list-group-item text-${complete ? 'success' : 'danger'}`}>{title}</li>; 
}
