import React, { useState } from 'react';
import StarRating from './StarRating';
import './BiteDetails.css';

const BiteDetails = ({ bites }) => {
  return (
    <div className="bites-container">
      {bites.map((bite) => (
        <div key={bite.id} className="bite-container">
          <h1 className="bite-address">{bite.address}</h1>
          <div className="bite-rating">
            <StarRating rating={4} setRating={(rating) => console.log(`New rating for ${bite.id}: ${rating}`)} /> {/* Placeholder rating */}
            <span className="bite-reviews">(123 reviews)</span> {/* Placeholder number of reviews */}
          </div>
          <div className="bite-summary">
            {bite.summary}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BiteDetails;
