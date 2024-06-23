import React, { Fragment, useState } from "react";

const InputAddress = () => {

    const [address, setAddress] = useState("") //""default value

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { address };
            const response = await fetch(`${process.env.REACT_APP_API_URL}/bites`,{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            console.log(`env var : ${process.env.REACT_APP_API_URL}`);
            console.log(response);
            window.location = "/"; // once response has been sent, it will refresh to show changes

        } catch (err) {
            console.error(err.message);
        }
    }
    
    return (
        <Fragment>
            <h1 className="text-center mt-5">Bite Size</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input type="text" className="form-control" value={address} onChange={e =>
                    setAddress(e.target.value)}/>
                <button className="btn btn-success">Search</button>
            </form>
        </Fragment>
    );
};

export default InputAddress;