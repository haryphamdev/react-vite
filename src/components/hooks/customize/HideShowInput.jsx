import { useEffect, useState } from "react";

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
export default HideShowInput;