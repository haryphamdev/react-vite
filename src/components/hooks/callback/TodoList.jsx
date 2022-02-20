import { useCallback, useState } from 'react';
import AddTodo from './AddTodo';

const TodoList = (props) => {
    const [count, setCount] = useState("");

    const [todos, setTodos] = useState([
        { name: 'Default Todo...' },
    ]);


    // const addNewTodo = (todo) => {
    //     setTodos([...todos, todo])
    // }

    // const addNewTodo = useCallback(
    //     (todo) => {
    //         // setTodos([...todos, todo])
    //         setTodos((todos) => [...todos, todo])
    //     }, [])

    const addNewTodo = useCallback((todo) => {
        setTodos((todos) => [...todos, todo])

    }, []);

    const handleCount = () => {
        setCount(Math.floor(Math.random() * 10))
    }

    return (
        <>
            {todos && todos.length > 0 &&
                todos.map((todo, index) => {
                    return (
                        <div key={`todo-${index}`}>{todo.name}</div>
                    )
                })
            }

            <br />
            <AddTodo addNewTodo={addNewTodo} />
            <br />
            <div>
                <button onClick={() => handleCount()}>Count random...</button>
                My total todos are: {count}
            </div>
        </>
    )
}

export default TodoList;