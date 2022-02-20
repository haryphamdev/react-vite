import React, { useEffect, useState } from "react";

const HideShowInput = (props) => {
    const { name, role } = props;
    const [isShow, setIsShow] = useState(false);

    const arrUser = ["name"];
    const arrLeader = ["name", "email", "address"];
    useEffect(() => {
        if (role === "user" && arrUser.includes(name)) {
            setIsShow(true)
        }

        if (role === "leader" && arrLeader.includes(name)) {
            setIsShow(true)
        }
    }, [])

    console.log("check props: ", props)
    return (
        <>
            {isShow && props.children}
        </>
    )
}

// export default HideShowInput;

const areEqual = (prevProps, nextProps) => {
    /*
    return true if passing nextProps to render would return
    the same result as passing prevProps to render,
    otherwise return false
    */
    // this is the inverse from shouldComponentUpdate.
    // console.log(prevProps, nextProps)
    return prevProps.valueInput === nextProps.valueInput;
}

export default React.memo(HideShowInput, areEqual);