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
      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.headerText}>Here is your Bite.</h1>
        </div>
        {bite ? (
          <div style={styles.contentContainer}>
            <div style={styles.summaryContainer}>
              <h2>{bite.address}</h2>
              {/* Replace with StarRating component */}
              <StarRating rating={3.5} /> {/* Replace with actual rating */}
              <div style={styles.reviews}>
                <p>Number of Reviews: {10}</p> {/* Replace with actual number of reviews */}
              </div>
              <p>{bite.summary}</p>
            </div>
          </div>
        ) : (
          <p>Loading bite details...</p>
        )}
      </div>
    </Fragment>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    background: '#f0f0f0', // Background color for the entire page
    padding: '2rem',
  },
  header: {
    width: '100%',
    textAlign: 'center',
    marginBottom: '2rem',
  },
  headerText: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
  },
  contentContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
  },
  summaryContainer: {
    width: '50%', // Takes up half of the container width initially
    padding: '2rem',
    background: '#343a40', // Dark background color
    color: '#ffffff', // Text color
    borderRadius: '8px', // Rounded corners
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.8)', // Box shadow
  },
  reviews: {
    marginTop: '1rem',
  },
};

export default ShowSummary;
