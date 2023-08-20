// import React from 'react';
//
// const TodoList = ({todos, setTodos, setEditTodo}) => {
//
//     const handleComplete = (todo) => {
//         setTodos(
//             todos.map(item => {
//                 if (item.id === todo.id) {
//                     return {...item, completed: !item.completed}
//                 }
//                 return item
//             })
//         )
//     }
//
//     const handleEdit = ({id}) => {
//         const findTodo = todos.find(todo => todo.id === id)
//         setEditTodo(findTodo)
//     }
//
//     const handleDelete = ({id}) => {
//         setTodos(todos.filter(todo => todo.id !== id))
//     }
//
//     return (
//         <div>
//
//             {todos.map(todo => (
//
//                 <li className='list-item'
//                     key={todo.id}
//                 >
//
//                     <input
//                         type="text"
//                         value={todo.title}
//                         className={`list ${todo.completed ? 'complete' : ''}`}
//                         onChange={event => event.preventDefault()}
//                     />
//
//                     <div>
//                         <button className='button-complete task button'
//                                 onClick={() => handleComplete(todo)}
//                         >
//                             Complete
//                         </button>
//
//                         <button className='button-edit task button'
//                                 onClick={() => handleEdit(todo)}
//                         >
//                             Edit
//                         </button>
//
//                         <button className='button-delete task button'
//                                 onClick={() => handleDelete(todo)}
//                         >
//                             Delete
//                         </button>
//
//                     </div>
//
//                 </li>
//
//             ))}
//
//         </div>
//     );
// };
//
// export default TodoList;


// import React from 'react';
//
// const TodoList = ({todos, setTodos}) => {
//
//     const handleDelete = ({id}) => {
//         setTodos(todos.filter(todo => todo.id !== id))
//     }
//
//     return (
//         <div>
//             {todos.map(todo => (
//                 <li className='list-item'
//                     key={todo.id}
//                 >
//                     <input
//                         type="text"
//                         value={todo.title}
//                         className='list'
//                         onChange={event => event.preventDefault()}
//                     />
//                     <div>
//                         <button className='button-complete task button'>Complete</button>
//                         <button className='button-edit task button'>Edit</button>
//
//                         <button className='button-delete task button'
//                         onClick={() => handleDelete(todo)}
//                         >Delete
//                         </button>
//
//                     </div>
//                 </li>
//             ))}
//         </div>
//     );
// };
//
// export default TodoList;


// import React from 'react';
//
// const TodoList = ({todos, setTodos, setEditTodo}) => {
//
//     const handleComplete = (todo) => {
//         setTodos(
//             todos.map(item => {
//                 if(item.id === todo.id) {
//                     return {...item, completed: !item.completed}
//                 } return item
//             })
//         )
//     }
//
//     const handleEdit = ({id}) => {
//         const findTodo = todos.find(todo => todo.id === id)
//         setEditTodo(findTodo)
//     }
//
//     const onHandleDelete = ({id}) => {
//         setTodos(todos.filter(todo => todo.id !== id))
//     }
//
//     return (
//         <div>
//             {todos.map(todo => (
//                 <li
//                     className='list-item'
//                     id={todo.id}
//                 >
//                     <input type="text"
//                            className={`list ${todo.completed ? 'complete' : ''}`}
//                            value={todo.title}
//                            onChange={event => event.preventDefault()}
//                     />
//                     <div>
//                         <button className='button-complete task button'
//                                 onClick={() => handleComplete(todo)}
//                         >Complete
//                         </button>
//
//                         <button className='button-edit task button'
//                                 onClick={() => handleEdit(todo)}
//                         >Edit</button>
//
//                         <button className='button-delete task button'
//                             onClick={() => onHandleDelete(todo)}
//                         >Delete
//                         </button>
//                     </div>
//                 </li>
//             ))}
//         </div>
//     );
// };
//
// export default TodoList;


// import React from 'react';
//
// const TodoList = ({todos, setTodos, setEditTodo}) => {
//
//     const handleComplete = (todo) => {
//         setTodos(
//             todos.map(item => {
//                 if(item.id === todo.id) {
//                     return {...item, completed: !item.completed}
//                 } return item
//             })
//         )
//     }
//
//     const handleEdit = ({id}) => {
//         const findTodo = todos.find(todo => todo.id === id)
//         setEditTodo(findTodo)
//     }
//
//     const handleDelete = ({id}) => {
//         setTodos(todos.filter(todo => todo.id !== id))
//     }
//
//     return (
//         <div>
//             {todos.map(todo => (
//                 <li className='list-item'
//                     id={todo.id}
//                 >
//
//                     <input type="text"
//                            value={todo.title}
//                            className={`list ${todo.completed ? 'complete' : ''} `}
//                            onChange={event => event.preventDefault()}
//                     />
//
//                     <div>
//                         <button className='button-complete task button'
//                         onClick={() => handleComplete(todo)}
//                         >Complete</button>
//
//                         <button className='button-edit task button'
//                                 onClick={() => handleEdit(todo)}
//                         >Edit
//                         </button>
//
//                         <button className='button-delete task button'
//                                 onClick={() => handleDelete(todo)}
//                         >Delete
//                         </button>
//
//                     </div>
//
//                 </li>
//             ))}
//         </div>
//     );
// };
//
// export default TodoList;


// import React from 'react';
//
// const TodoList = ({todos, setTodos}) => {
//
//     const handleDelete = ({id}) => {
//         setTodos(todos.filter(todo => todo.id !== id))
//     }
//
//     return (
//         <div>
//
//             {todos.map(todo => (
//
//                 <li className="list-item"
//                     key={todo.id}
//                 >
//                     <input
//                         type="text"
//                         value={todo.title}
//                         className="list"
//                         onChange={event => event.preventDefault()}
//                     />
//
//                     <div>
//
//                         <button className='button-complete task-button'>Complete</button>
//                         <button className='button-edit task-button'>Edit</button>
//                         <button className='button-delete task-button'
//                                 onClick={() => handleDelete(todo)}
//                         >
//                             Delete
//                         </button>
//
//                     </div>
//
//                 </li>
//
//             ))}
//
//         </div>
//     );
// };
//
// export default TodoList;


// import React from 'react';
//
// const TodoList = ({todos, setTodos, setEditTodo}) => {
//
//     // const handleComplete = (todo) => {
//     //     setTodos(
//     //         todos.map(item => {
//     //             if (item.id === todo.id) {
//     //                 return {...item, completed: !item.completed}
//     //             } return item
//     //         })
//     //     )
//     // }
//
//     const handleComplete = (todo) => {
//         setTodos(todos.map(item => item.id === todo.id ? {...item, completed: !item.completed} : item))
//     }
//
//     const handleEdit = ({id}) => {
//         const findTodo = todos.find(todo => todo.id === id)
//         setEditTodo(findTodo)
//     }
//
//     const handleDelete = ({id}) => {
//         setTodos(todos.filter(todo => todo.id !== id))
//     }
//
//     return (<div>
//
//             {todos.map(todo => (
//
//                 <li className="list-item"
//                     key={todo.id}
//                 >
//                     <input
//                         type="text"
//                         value={todo.title}
//                         className={`list ${todo.completed ? "complete" : ""}`}
//                         onChange={event => event.preventDefault()}
//                     />
//                     <div>
//                         <button className="button-complete task button"
//                                 onClick={() => handleComplete(todo)}
//                         >
//                             Complete
//                         </button>
//
//                         <button className="button-edit task button"
//                                 onClick={() => handleEdit(todo)}
//                         >
//                             Edit
//                         </button>
//
//                         <button className="button-delete task button"
//                                 onClick={() => handleDelete(todo)}
//                         >
//                             Delete
//                         </button>
//
//                     </div>
//
//                 </li>))}
//
//         </div>);
// };
//
// export default TodoList;


// import React from 'react';
//
// const TodoList = ({todos, setTodos, setEditTodo}) => {
//
//     const handleComplete = (todo) => {
//         setTodos(
//             todos.map(item => item.id === todo.id ? {...item, completed: !item.completed} : item)
//         )
//     }
//
//     const handleEdit = ({id}) => {
//         const findTodo = todos.find(todo => todo.id === id)
//         setEditTodo(findTodo)
//     }
//
//     const handleDelete = ({id}) => {
//         setTodos(todos.filter(todo => todo.id !== id))
//     }
//
//     return (
//         <div>
//             {todos.map(todo => (
//                 <li className="list-item"
//                     key={todo.id}
//                 >
//                     <input
//                         type="text"
//                         className={`list ${todo.completed? "complete" : ""}`}
//                         value={todo.title}
//                         onChange={event => event.preventDefault()}
//                     />
//
//                     <div>
//                         <button className="button-complete task-button"
//                         onClick={() => handleComplete(todo)}
//                         >Complete</button>
//
//                         <button className="button-edit task-button"
//                                 onClick={() => handleEdit(todo)}
//                         >
//                             Edit
//                         </button>
//
//                         <button className="button-delete task-button"
//                                 onClick={() => handleDelete(todo)}
//                         >
//                             Delete
//                         </button>
//                     </div>
//                 </li>
//             ))}
//
//         </div>
//     );
// };
//
// export default TodoList;


// import React from 'react';
//
// const TodoList = ({todos, setTodos, setEditTodo}) => {
//
//     const handleComplete = (todo) => {
//         setTodos(
//             todos.map(item => item.id === todo.id ? {...item, completed: !item.complete} : item)
//         )
//     }
//
//     const handleEdit = ({id}) => {
//         const findTodo = todos.find(todo => todo.id === id)
//         setEditTodo(findTodo)
//     }
//
//     const handleDelete = ({id}) => {
//         setTodos(todos.filter(todo => todo.id !== id))
//     }
//
//     return (
//         <div>
//
//             {todos.map(todo => (
//
//                 <li className="list-item"
//                     key={todo.id}
//                 >
//                     <input
//                         type="text"
//                         value={todo.title}
//                         className={`list ${todo.completed ? "complete" : ""}`}
//                         onChange={event => event.preventDefault()}
//                     />
//
//                     <div>
//
//                         <button className='button-complete task-button'
//                                 onClick={() => handleComplete(todo)}
//                         >
//                             Complete
//                         </button>
//
//                         <button className='button-edit task-button'
//                                 onClick={() => handleEdit(todo)}
//                         >
//                             Edit
//                         </button>
//
//                         <button className='button-delete task-button'
//                                 onClick={() => handleDelete(todo)}
//                         >
//                             Delete
//                         </button>
//
//                     </div>
//
//                 </li>
//
//             ))}
//
//         </div>
//     );
// };
//
// export default TodoList;


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


















