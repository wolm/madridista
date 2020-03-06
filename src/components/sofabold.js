import React from "react"
import { useActiveMatches } from '../infrastructure/data-provider';
import { matchMapper } from '../infrastructure/match-mapper';
import SofaboldContainer from "./sofabold-container";


const SofaBold = (props) => {
    const matches = useActiveMatches(props.dataUrl, matchMapper);

    return (<SofaboldContainer matches={ matches } />);
}

export default SofaBold;
