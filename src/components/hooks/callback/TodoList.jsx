import { useCallback, useState, useMemo } from 'react';
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
        setTodos([...todos, todo])
        // setTodos((todos) => [...todos, todo])

    }, [todos]);

    const handleCount = () => {
        setCount(Math.floor(Math.random() * 10))
    }

    const superVar = useMemo(
        () => {
            let result = 0;
            for (let i = 0; i < 1000000000; i++) {
                result += i;
            }
            return result;
        }, []);

    // const superVar = heavyFunction;

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
            <div>super... : {superVar}</div>
        </>
    )
}

export default TodoList;