import React from 'react';
import ReactDOM from 'react-dom';
import idGenerator from 'react-id-generator';

import AppHeader from './components/AppHeader.js';
import SearchPanel from './components/SearchPanel.js';
import TodoList from './components/TodoList.js';
import ItemStatusFilter from './components/ItemStatusFilter.js'
import ItemAddForm from './components/ItemAddForm.js'

import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';


class App extends React.Component {

    state = {
        todoData: [
            this.createTodoItem('Drink'),
            this.createTodoItem('Make awm app'),
            this.createTodoItem('Build a house'),
        ],
        term: ''
    };
//******************************************************************
    createTodoItem(label){
        return {
            label: label,
            impt: false,
            done: false,
            id: idGenerator(),
        };
    }

    deleteItem = (id) => {
        this.setState((state) => {
            const indexForDelete = state.todoData.findIndex((element) => (element.id === id));
            let stateTodoData = [...state.todoData]; //нельзя изменять существующий state!!!!!
            stateTodoData.splice(indexForDelete, 1);
            return {todoData: stateTodoData,}
        })
    };
    addItem = (element) => {
        const newItem = this.createTodoItem(element);
        this.setState((state) => {
            const stateTodoData = [...state.todoData, newItem];
            return {todoData: stateTodoData}
        });

    };

toggleProperty(todoData, id, propName){
    const indexDone = todoData.findIndex((element) => (element.id === id));
    let locTodoData = [...todoData];
    locTodoData[indexDone][propName] = !locTodoData[indexDone][propName];
    return locTodoData;
};
    onToggleImportant = (id) => {
        this.setState((state) => {
            return {todoData: this.toggleProperty(state.todoData, id, 'impt')}
        })
    };

    onToggleDone = (id) => {
        this.setState((state) => {
            return {todoData: this.toggleProperty(state.todoData, id, 'done')}
        })
    };

    searchTerm(items, term){
        if (term.length === 0) return items;
        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });
    }

    onSearhCange = (term) => {
        this.setState({term: term})
    };

//**********************************************************************
    render() {
        const doneCount = this.state.todoData.filter((el) => el.done).length;
        const todoCount = this.state.todoData.length - doneCount;
        const visibleItems = this.searchTerm(this.state.todoData, this.state.term);
        console.log(visibleItems);

        return <div className="todo-app">
            <AppHeader toDo={todoCount} done={doneCount}/>
            <div className="top-panel d-flex">
                <SearchPanel onSearhCange = {this.onSearhCange}/>
                <ItemStatusFilter/>
            </div>
            <TodoList todos={visibleItems}
                      onDeleted=        {this.deleteItem}
                      onToggleImportant={this.onToggleImportant}
                      onToggleDone=     {this.onToggleDone}/>
            <ItemAddForm onItemAdd=     {this.addItem}/>
        </div>
    };
}

ReactDOM.render(<App/>, document.getElementById('root'));

export default App;


//serviceWorker.unregister();
