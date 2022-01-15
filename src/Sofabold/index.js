import React from "react"
import { useActiveMatches } from './infrastructure/data-provider';
import { makeMatchMapper } from './infrastructure/match-mapper';
import SofaboldContainer from "./components/sofabold-container";


export const Sofabold = (props) => {
    const matchMapper = makeMatchMapper(props.maxItems);
    const matches = useActiveMatches(props.dataUrl, matchMapper);

    return (<SofaboldContainer matches={ matches } />);
}
