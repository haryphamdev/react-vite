import { useRef, useState } from "react";

const SuperForm2 = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [isValidName, setIsValidName] = useState(true);
    const [isValidEmail, setIsValidEmail] = useState(true);

    const nameRef = useRef(null)
    const emailRef = useRef(null)

    const handleOnClick = () => {

        //reset init values
        setIsValidEmail(true);
        setIsValidName(true);

        if (!name) {
            setIsValidName(false);
            // document.getElementById("nameId").focus()
            nameRef.current.focus();

            return;
        }

        if (!email) {
            // document.getElementById("emailId").focus()
            emailRef.current.focus()
            setIsValidEmail(false);
            return;
        }

        alert("viola!!!")

    }
    return (
        <div className="super-form">
            <span>Your Name:</span>
            <input
                // id="nameId"
                ref={nameRef}
                value={name}
                className={isValidName === true ? "" : "invalid"}
                type="text"
                onChange={(event) => setName(event.target.value)}
            />

            <span>Your Email:</span>
            <input
                ref={emailRef}
                // id="emailId"
                value={email}
                className={isValidEmail === true ? "" : "invalid"}
                type="email"
                onChange={(event) => setEmail(event.target.value)}
            />
            <div>
                <button onClick={() => handleOnClick()}>Submit</button>
            </div>
            <br />
        </div>)
}

export default SuperForm2;
