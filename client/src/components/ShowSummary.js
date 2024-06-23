import React, { Fragment, useEffect, useState } from "react";
import StarRating from "./StarRating"; // Assuming this is your StarRating component

const ShowSummary = () => {
  const [bite, setBite] = useState(null);

  useEffect(() => {
    const fetchLatestBite = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/bites/latest`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        console.log("Fetched bite data:", jsonData); // Log fetched data
        setBite(jsonData);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchLatestBite();
  }, []);

  console.log("Current bite state:", bite); // Log current state

  return (
    <Fragment>
      <h1>Show Bite Summary</h1>
      {bite ? (
        <div>
          <h2>{bite.address}</h2>
          <p>{bite.summary}</p>
          {/* Replace with StarRating component */}
          <StarRating rating={3.5} /> {/* Replace with actual rating */}
          <div>
            <p>Number of Reviews: {10}</p> {/* Replace with actual number of reviews */}
          </div>
        </div>
      ) : (
        <p>Loading bite details...</p>
      )}
    </Fragment>
  );
};

export default ShowSummary;
