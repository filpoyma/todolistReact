import React from 'react';
import TodoListItem from './TodoListItem.js'
import './TodoList.css'

const TodoList = ( props ) => { //указываем props если ф-я
    const elements = props.todos.map((item) => {
        return (
            <li key={item.id} className="list-group-item">
                < TodoListItem {...item}  //деструкторизация
                               //  label = {item.label}
                               // impt  = {item.impt}
                               // done  = {item.done} //передаем в TodoListItem
                onDeleted = {() => props.onDeleted(item.id)}
                onToggleImportant = {() => props.onToggleImportant(item.id)}
                onToggleDone = {() => props.onToggleDone(item.id)}
                />
            </li>
        )
        //return <li>< TodoListItem {...item}/></li>
        // деструкторизация обьектов
        // спред оператор для обьектов - если хотим передать ВСЕ свойства
        //в качестве свойств внутрь компонента
    });

    //********можно передавать массив и он отрисуется
    return (
        <ul className="todo-list">
            { elements }
        </ul>
    )
};

export default TodoList;

