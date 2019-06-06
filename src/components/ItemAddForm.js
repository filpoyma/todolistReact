import React from 'react';
import './ItemAddForm.css'

class ItemAddForm extends React.Component{

    state = {
        label: ''
    };

    onLabelChange = (event) => {
        //this.setState({label: event.target.value.toUpperCase()})
        this.setState({label: event.target.value})
    };

    onSubmit = (event) => {
        event.preventDefault();
        if(this.state.label === '') return;
        this.props.onItemAdd(this.state.label);
        this.setState({label: ''});
    };

    render(){
        return(
        <form className="item-add-form d-flex" onSubmit = {this.onSubmit}>
            <input type="text" className="form-control"
            onChange={this.onLabelChange}
            placeholder="add smth todo"
            value={this.state.label}/>
            <button className="btn btn-outline-secondary">
                    AddItem
            </button>
        </form>
        )
    }
}

export default ItemAddForm;
