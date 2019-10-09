import React from 'react';

import './ListItems.css';

const ListItems = (props) => {
    const {myItemsProps, deleteItem} = props;
    let size = myItemsProps.length;

    const AllItems = size ? ( myItemsProps.map(item => {
        return (
            <div key={item.id}>
                <span className="name">{item.name}</span>
                <span className="age">{item.age}</span>
                <span className="action icon" onClick={() => deleteItem(item.id)} >&times;</span>
            </div>
        )
    })
    ) : <p>There is no item to show</p> 

    return (
        <div className="ListItems">
            <div>
                <span className="name title">Name</span>
                <span className="age title">Age</span>
                <span className="action title">Done</span>
            </div>            
            {AllItems}
        </div>
    )
}

export default ListItems;
