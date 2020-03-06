import { useEffect, useState } from 'react';
import axios from "axios"

export const useActiveMatches = (dataUrl, dataMapper) => {
    const [matches, setMatches] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios(dataUrl);
                setMatches(dataMapper(result.data.kampe));
            } catch (error) {
                console.log(error);            
            }
        }

        fetchData();
    }, []);

    return matches;
}
