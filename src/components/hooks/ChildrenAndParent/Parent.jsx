import { useEffect, useRef } from "react";
import ChildComponent from "./ChildComponent";
import { emitter } from "./emitter";
const Parent = (props) => {

    const parentFunc = () => {
        alert("me")
    }

    const parentFunc2 = (message) => {
        alert(message)
    }

    const childRef = useRef(null);

    const callMyChild = () => {
        // emitter.emit("test", "call me now sun");
        childRef.current.fireChildFunction()
    }

    return (
        <div className="parent">
            we are the parents
            <br />
            <div>
                <button onClick={() => callMyChild()}>Call Child now</button>
            </div>
            <br />
            <ChildComponent
                ref={childRef}
                parentFunc={parentFunc}
                parentFunc2={parentFunc2}
            />
        </div>
    )
}

export default Parent;