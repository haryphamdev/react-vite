import ChildComponent from "./ChildComponent";

const Parent = (props) => {

    const parentFunc = () => {
        alert("me")
    }

    const parentFunc2 = (message) => {
        alert(message)
    }

    return (
        <div className="parent">
            we are the parents
            <br />
            <ChildComponent
                parentFunc={parentFunc}
                parentFunc2={parentFunc2}
            />
        </div>
    )
}

export default Parent;