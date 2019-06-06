import React from 'react';
import './ItemStatusFilter.css'

class ItemStatusFilter extends React.Component{
    render(){
        return(
            <div className="btn-group">
                <button type="button" className="btn btn-info">All</button>
                <button type="button" className="btn btn-outline-secondary">Active</button>
                <button type="button" className="btn btn-outline-secondary">Done</button>
            </div>
        )
    };
}

// const ItemStatusFilterFunct = () =>{
//     return(
//         <div className="btn-group">
//             <button type="button" className="btn btn-info">All</button>
//             <button type="button" className="btn btn-outline-secondary">Active</button>
//             <button type="button" className="btn btn-outline-secondary">Done</button>
//         </div>
//     )
// };

export default ItemStatusFilter;


