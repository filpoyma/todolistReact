import React from 'react';
import './TodoListItem.css'

class TodoListItem extends React.Component {

//*********************es2019standart****************************
//     onLabelClick = () => {
//         this.setState((state)  => {
//             return {done: !state.done};
//         });
//     };
//
//     onMarkImportant = () => {
//         this.setState( (state) => {
//             return {impt: !state.impt} //напрямую стейт менять нельзя !this.state.impt,тк он асинхнонен. нужно только через передачу state
//         });
//     };

    render() { // деструкторизация: прилетает event.label and event.impt из TodoList
        //const {label} = this.props;
        //const {done, impt} = this.state;

        let classNames = "todo-list-item";
        if (this.props.done) classNames += " done";
        if (this.props.impt) classNames += " impt";

        return (
            <span className={classNames}>
                <span className="todo-list-item-label"
                      onClick={this.props.onToggleDone}>
                {this.props.label}
                </span>
                <button type="button" className="btn btn-outline-success btn-sm float-right"
                    onClick={this.props.onToggleImportant}>
                    <i className="fa fa-exclamation"></i>
                </button>

                <button type="button" className="btn btn-outline-danger btn-sm float-right"
                onClick={this.props.onDeleted}>
                    <i className="fa fa-trash-o"></i>
                </button>
            </span>
        )
    };

}

// const TodoListItemFunc = ({label, impt = false}) => { // деструкторизация: прилетает event.label and event.impt
//     const style = {color: impt ? 'tomato' : 'black'}
//     return (
//         <span className="todo-list-item">
//         <span className="todo-list-item-label" style={style}> {label} </span>
//             <button type="button" className="btn btn-outline-success btn-sm">
//                 <i className="fa fa-exclamation"></i>
//             </button>
//
//             <button type="button" className="btn btn-outline-danger btn-sm">
//                 <i className="fa fa-trash-o"></i>
//             </button>
//         </span>
//     )
// };

export default TodoListItem;

