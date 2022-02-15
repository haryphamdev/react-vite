import HideShowInput from "./HideShowInput";

const SuperInput = (props) => {
    const role = "user";

    return (
        <>
            <HideShowInput role={role} name={"name"}>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" className="form-control" />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"email"}>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="text" className="form-control" />
                </div>
                <br />
            </HideShowInput>

            <HideShowInput role={role} name={"address"}>
                <div className="form-group">
                    <label>Address:</label>
                    <input type="text" className="form-control" />
                </div>
                <br />
            </HideShowInput>

        </>
    )
}

export default SuperInput;