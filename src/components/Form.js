
import React, {useEffect} from 'react';
import {v4 as uuidv4} from "uuid";

const Form = ({input, setInput, todos, setTodos, editTodo, setEditTodo}) => {

    const updateTodo = (title, id, completed) => {
        setTodos(todos.map(todo => todo.id === id ? {title, id, completed} : todo))
        setEditTodo('')
    }

    useEffect(() => {
        editTodo ? setInput(editTodo.title) : setInput('')
    }, [setInput, editTodo])

    const onFormSubmit = (event) => {
        event.preventDefault()

        if (!editTodo) {
            setTodos([...todos, {title: input, id: uuidv4(), completed: false}])
            setInput('')
        } else {
            updateTodo(input, editTodo.id, editTodo.completed)
        }
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                className="task-input"
                placeholder="Enter Task"
                value={input}
                required
                onChange={event => setInput(event.target.value)}
            />
            <button
                className="button-add"
                type="submit"
            >
                {editTodo ? "OK" : "ADD"}
            </button>
        </form>
    );
};

export default Form;















