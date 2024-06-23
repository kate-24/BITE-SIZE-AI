import React, { Fragment, useState } from "react";
import "./InputAddress.css"; // Import your CSS for additional styling
import ShowSummary from "./ShowSummary";

const InputAddress = () => {
  const [address, setAddress] = useState("");
  const [showSummary, setShowSummary] = useState(false);

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
        setShowSummary(true); // Show summary after successful search
        window.location = "/"; // once response has been sent, it will refresh to show changes
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <div className="input-address-container">
        <div className="background-image">
          <img src={"/bg1.jpg"} alt="Background" className="background-img" />
          <div className="overlay"></div>
        </div>
        <div className="content">
          <h1 className="text-center">Find Your Restaurant</h1>
          <form className="search-form" onSubmit={onSubmitForm}>
            <input
              type="text"
              className="form-control search-input"
              placeholder="Enter address..."
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "Enter address...")}
            />
            <button type="submit" className="btn search-btn">
              Search
            </button>
          </form>
        </div>
      </div>
      {showSummary && <ShowSummary />} {/* Show summary component when showSummary is true */}
    </Fragment>
  );
};

export default InputAddress;
