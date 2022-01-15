import React from 'react';
import MatchList from './match-list';
import SofaboldServiceNote from './sofabold-servicenote';

const SofaboldContainer = ({ matches }) => (
    <>
        <h2>Næste kampe på TV</h2>
        <MatchList matches={ matches } />
        <SofaboldServiceNote />
    </>
);

export default SofaboldContainer;
