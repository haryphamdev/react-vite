import { useEffect, forwardRef, useImperativeHandle } from "react";
import { emitter } from "./emitter";

const ChildComponent = (props, ref) => {
    useEffect(() => {
        emitter.on("test", (data) => {
            fireChildFunction(data);
        })
    }, []);

    // const fireChildFunction = (data) => {
    //     alert(data)
    // }

    useImperativeHandle(ref, () => ({

        fireChildFunction() {
            alert("getAlert from Child");
        }

    }));
    return (
        <div className="child">
            I'm a child
            <div>
                <button onClick={() => callYourParent()}>Call my parents</button>
            </div>
        </div>
    )
}

export default forwardRef(ChildComponent);