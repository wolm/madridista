import React from "react"
import { useActiveMatches } from './infrastructure/data-provider';
import { matchMapper } from './infrastructure/match-mapper';
import SofaboldContainer from "./components/sofabold-container";

const Sofabold = (props) => {
    const matches = useActiveMatches(props.dataUrl, matchMapper);

    return (<SofaboldContainer matches={ matches } />);
}

export default Sofabold;
