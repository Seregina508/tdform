// import React, {useEffect} from 'react';
// import {v4 as uuidv4} from 'uuid';
//
// const Form = ({input, setInput, todos, setTodos, editTodo, setEditTodo}) => {
//
//     const updateTodo = (title, id, completed) => {
//         const newTodo = todos.map(todo =>
//             todo.id === id ? {title, id, completed} : todo
//         )
//         setTodos(newTodo)
//         setEditTodo('')
//     }
//
//     useEffect(() => {
//         if(editTodo){
//             setInput(editTodo.title);
//         } else {
//             setInput('')
//         }
//     }, [setInput, editTodo]
//     )
//
//     const onInputChange = (event) => {
//         setInput(event.target.value)
//     }
//
//     const onFormSubmit = (event) => {
//         event.preventDefault()
//
//         if (!editTodo) {
//
//             setTodos([...todos, {id: uuidv4(), title: input, completed: false}])
//             setInput('')
//         } else {
//             updateTodo(input, editTodo.id, editTodo.completed)
//         }
//     }
//
//     return (
//         <form onSubmit={onFormSubmit}>
//
//             <input
//                 type="text"
//                 placeholder='Enter Task'
//                 className='task-input'
//                 value={input}
//                 required
//                 onChange={onInputChange}
//             />
//
//             <button
//                 className='button-add'
//                 type='submit'
//             >
//                 {editTodo ? 'OK' : 'ADD'}
//             </button>
//
//         </form>
//     );
// };
//
// export default Form;


// import React from 'react';
// import {v4 as uuidv4} from 'uuid';
//
//
// const Form = ({input, setInput, todos, setTodos}) => {
//
//     const onInputChange = (event) => {
//         setInput(event.target.value)
//     }
//
//     const onFormSubmit = (event) => {
//         event.preventDefault()
//
//         setTodos([...todos, {id: uuidv4(), title: input, completed: false}])
//
//
//     }
//
//     return (
//         <form onSubmit={onFormSubmit}>
//             <input
//                 type="text"
//                 placeholder='Enter Task'
//                 className='task-input'
//                 value={input}
//                 required
//                 onChange={onInputChange}
//             />
//
//             <button
//             className='button-add'
//             type='submit'
//             >
//                 Add
//             </button>
//
//         </form>
//     );
// };
//
// export default Form;


// import React, {useEffect} from 'react';
// import {v4 as uuidv4} from 'uuid';
//
// const Form = ({input, setInput, todos, setTodos, editTodo, setEditTodo}) => {
//
//     const updateTodo = (title, id, completed) => {
//         const newTodo = todos.map(todo =>
//         todo.id === id ? {title, id, completed} : todo
//         )
//         setTodos(newTodo)
//         setEditTodo('')
//     }
//
//     useEffect(() => {
//         if(editTodo){
//             setInput(editTodo.title);
//         } else {
//             setInput('')
//         }
//     }, [setInput, editTodo])
//
//     const onInputChange = (event) => {
//         setInput(event.target.value)
//     }
//
//     const onFormSubmit = (event) => {
//         event.preventDefault()
//
//         if (!editTodo) {
//
//             setTodos([...todos, {id: uuidv4(), title: input, completed: false}])
//             setInput('')
//         } else {
//             updateTodo(input, editTodo.id, editTodo.completed)
//         }
//     }
//
//     return (
//         <form onSubmit={onFormSubmit}>
//             <input type="text"
//                    className='task-input'
//                    placeholder='Enter task'
//                    value={input}
//                    required
//                    onChange={onInputChange}
//             />
//             <button
//                 className='button-add'
//                 type='submit'
//             >
//                 {editTodo ? 'OK' : 'Add'}
//             </button>
//         </form>
//     );
// };
//
// export default Form;


// import React, {useEffect} from 'react';
// import {v4 as uuidv4} from 'uuid';
//
// const Form = ({input, setInput, todos, setTodos, editTodo, setEditTodo}) => {
//
//     const updateTodo = (title, id, completed) => {
//         const newTodo = todos.map(todo =>
//             todo.id === id ? {title, id, completed} : todo
//         )
//         setTodos(newTodo)
//         setEditTodo('')
//     }
//
//     useEffect(() => {
//         if (editTodo) {
//             setInput(editTodo.title);
//         } else {
//             setInput('')
//         }
//     }, [setInput, editTodo])
//
//
//     const onInputChange = (event) => {
//         setInput(event.target.value)
//     }
//
//     const onFormSubmit = (event) => {
//         event.preventDefault()
//
//         if (!editTodo) {
//
//             setTodos([...todos, {id: uuidv4(), title: input, completed: false}])
//             setInput('')
//         } else updateTodo(input, editTodo.id, editTodo.completed)
//     }
//
//     return (
//         <form onSubmit={onFormSubmit}>
//             <input type="text"
//                    className='task-input'
//                    placeholder='Entre Task'
//                    required
//                    value={input}
//                    onChange={onInputChange}
//             />
//
//             <button
//                 className='button-add'
//                 type='submit'
//             >
//                 {editTodo ? 'OK' : 'Add'}
//             </button>
//
//         </form>
//     );
// };
//
// export default Form;


// import React from 'react';
// import {v4 as uuidv4} from 'uuid';
//
// const Form = ({input, setInput, todos, setTodos}) => {
//
//     const onInputChange = (event) => {
//         setInput(event.target.value)
//     }
//
//     const onFormSubmit = (event) => {
//         event.preventDefault()
//
//         setTodos([...todos, {id: uuidv4(), title: input, completed: false}])
//
//     }
//
//     return (
//         <form onSubmit={onFormSubmit}>
//
//             <input
//                 type="text"
//                 placeholder="Enter Task"
//                 className="task-input"
//                 value={input}
//                 required
//                 onChange={onInputChange}
//             />
//
//             <button
//                 className="button-add"
//                 type="submit"
//             >
//                 Add
//             </button>
//
//         </form>
//     );
// };
//
// export default Form;


// import React, {useEffect} from 'react';
// import {v4 as uuidv4} from 'uuid';
//
// const Form = ({input, setInput, todos, setTodos, editTodo, setEditTodo}) => {
//
//     // const updateTodo = (title, id, completed) => {
//     //     const newTodo = todos.map(todo =>
//     //         todo.id === id ? {title, id, completed} : todo
//     //     )
//     //     setTodos(newTodo)
//     //     setEditTodo('')
//     // }
//
//
//     const updateTodo = (title, id, completed) => {
//         setTodos(todos.map(todo => todo.id === id ? {title, id, completed} : todo))
//         setEditTodo('')
//     }
//
//
//     useEffect(() => {
//             if (editTodo) {
//                 setInput(editTodo.title)
//             } else {
//                 setInput('')
//             }
//         }, [setInput, editTodo]
//     )
//
//
//     const onInputChange = (event) => {
//         setInput(event.target.value)
//     }
//
//     const onFormSubmit = (event) => {
//         event.preventDefault()
//
//         if (!editTodo) {
//             setTodos([...todos, {id: uuidv4(), title: input, completed: false}])
//             setInput('')
//         } else {
//             updateTodo(input, editTodo.id, editTodo.completed)
//         }
//     }
//
//     return (
//         <form onSubmit={onFormSubmit}>
//
//             <input
//                 type="text"
//                 placeholder="Enter Task"
//                 className="task-input"
//                 value={input}
//                 required
//                 onChange={onInputChange}
//             />
//
//             <button
//                 className="Button-add"
//                 type="submit"
//             >
//                 {editTodo ? "OK" : "ADD"}
//             </button>
//
//         </form>
//     );
// };
//
// export default Form;


// import React, {useEffect} from 'react';
// import {v4 as uuidv4} from 'uuid';
//
// const Form = ({input, setInput, todos, setTodos, editTodo, setEditTodo}) => {
//
//     const updateTodo = (title, id, completed) => {
//         const newTodo = todos.map(todo => todo.id === id ? {title, id, completed} : todo)
//         setTodos(newTodo)
//         setEditTodo('')
//     }
//
//     useEffect(() => {
//             if (editTodo) {
//                 setInput(editTodo.title);
//             } else {
//                 setInput('')
//             }
//         }, [setInput, editTodo]
//     )
//
//     const onInputChange = (event) => {
//         setInput(event.target.value)
//     }
//
//     const onFormSubmit = (event) => {
//         event.preventDefault()
//
//         if (!editTodo) {
//             setTodos([...todos, {title: input, id: uuidv4(), completed: false}])
//             setInput('')
//         } else {
//             updateTodo(input, editTodo.id, editTodo.completed)
//         }
//     }
//
//     return (
//         <form onSubmit={onFormSubmit}>
//             <input
//                 type="text"
//                 placeholder="Enter Task"
//                 className="task-input"
//                 value={input}
//                 required
//                 onChange={onInputChange}
//             />
//
//             <button
//                 className="button-add"
//                 type="submit"
//             >
//                 {editTodo ? "OK" : "ADD"}
//             </button>
//         </form>
//     );
// };
//
// export default Form;


// import React, {useEffect} from 'react';
// import {v4 as uuidv4} from 'uuid';
//
// const Form = ({input, setInput, todos, setTodos, editTodo, setEditTodo}) => {
//
//     const updateTodo = (title, id, completed) => {
//         setTodos(todos.map(todo => todo.id === id ? {title, id, completed} : todo))
//         setEditTodo('')
//     }
//
//     useEffect(() => {
//             editTodo ? setInput(editTodo.title) : setInput('')
//         }, [setInput, editTodo]
//     )
//
//     const onInputChange = (event) => {
//         setInput(event.target.value)
//     }
//
//     const onFormSubmit = (event) => {
//         event.preventDefault()
//
//         if (!editTodo) {
//             setTodos([...todos, {title: input, id: uuidv4(), completed: false}])
//             setInput('')
//         } else {
//             updateTodo(input, editTodo.id, editTodo.completed)
//         }
//     }
//
//     return (
//         <form onSubmit={onFormSubmit}>
//
//             <input
//                 type="text"
//                 placeholder="Enter Task"
//                 className="task-input"
//                 value={input}
//                 required
//                 onChange={onInputChange}
//             />
//
//             <button
//                 className="button-add"
//                 type="submit"
//             >
//                 {editTodo ? "OK" : "ADD"}
//             </button>
//
//         </form>
//     );
// };
//
// export default Form;


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
                // className="button-add"
                // type="submit"
            >
                {editTodo ? "OK" : "ADD"}
            </button>
        </form>
    );
};

export default Form;















