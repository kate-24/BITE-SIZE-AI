import React, {Fragment, useEffect, useState } from "react";


const ShowSummary = () => {

    const [bite, setBite] = useState([]);

    const getBite = async () => {
        try {
            
            const response = await fetch(`${process.env.REACT_APP_API_URL}/bites`); // GET request
            const jsonData = await response.json()

            setBite(jsonData);


        } catch (err) {
            console.error(err.message);
        }
    }

    
};

export default ShowSummary;