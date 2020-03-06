import React, { useState, useEffect } from "react"
import axios from "axios"
import Match from './match'

const SofaBold = (props) => {
    const [matches, setMatches] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios(props.dataUrl);
                setMatches(result.data.kampe);
            } catch (error) {
                console.log(error);            
            }
        }

        fetchData();
    }, []);

    return (
        <>
            <h2>Næste kampe på TV</h2>
            <dl className="sofabold">
                {matches.map(item => (
                    <Match key={item.id} data={item} />    
                ))}
            </dl>
            <p id="sofaboldservicenote">En service fra 
                <a 
                    href="https://sofabold.dk" 
                    rel="noopener noreferrer"
                    target="_blank"><img alt="Sofabold logo" style={{maxWidth: '60px'}} src="https://img.sofabold.dk/images/Design/sofabold_top_logo.png" /></a>
            </p>
        </>)
}

export default SofaBold;
