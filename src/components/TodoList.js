
import React from 'react';

const TodoList = ({todos, setTodos, setEditTodo}) => {

    const onComplete = (todo) => {
        setTodos(todos.map(el => el.id === todo.id ? {...el, completed: !el.completed} : el))
    }

    const onEdit = ({id}) => {
        setEditTodo(todos.find(todo => todo.id === id))
    }

    const onDelete = ({id}) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <div>
            {todos.map(todo => (
                <li>
                    <input
                        type="text"
                        value={todo.title}
                        className="list"
                        onChange={event => event.preventDefault()}
                    />
                    <div>
                        <button
                            className="button-complete task-button"
                            onClick={() => onComplete(todo)}
                        >
                            Complete
                        </button>

                        <button
                            className="button-edit task-button"
                            onClick={() => onEdit(todo)}
                        >
                            Edit
                        </button>

                        <button
                            className="button-delete task-button"
                            onClick={() => onDelete(todo)}
                        >
                            Delete
                        </button>
                    </div>
                </li>
            ))}
        </div>
    );
};

export default TodoList;


















