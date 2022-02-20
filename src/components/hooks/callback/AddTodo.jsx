import { useState, memo } from "react";

const AddTodo = (props) => {
    const { addNewTodo } = props;
    const [todoName, setTodoName] = useState("");

    console.log("render component add new todo")
    return (
        <div className="add-new-todo">
            <input
                type={"text"}
                value={todoName}
                onChange={(event) => setTodoName(event.target.value)}
            />
            <button onClick={() => addNewTodo({ name: todoName })}>Add</button>
        </div>
    )
}

// export default AddTodo;

// const areEqual = (prevProps, nextProps) => {
//     /*
//     return true if passing nextProps to render would return
//     the same result as passing prevProps to render,
//     otherwise return false
//     */
//     // this is the inverse from shouldComponentUpdate.
//     // console.log(prevProps, nextProps)
//     console.log(prevProps, nextProps)
//     return prevProps.addNewTodo === nextProps.addNewTodo;
// }

export default memo(AddTodo);