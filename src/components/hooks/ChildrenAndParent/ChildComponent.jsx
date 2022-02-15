const ChildComponent = (props) => {
    const callYourParent = () => {
        props.parentFunc2("i'm eric");
    }
    return (
        <div className="child">
            I'm a child
            <div>
                <button onClick={() => callYourParent()}>Call my parents</button>
            </div>
        </div>
    )
}

export default ChildComponent;