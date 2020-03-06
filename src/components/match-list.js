import React from 'react';
import Match from './match'

const MatchList = ({ matches }) => (
    <dl className="sofabold">
        {matches.map(item => (
            <Match key={item.id} data={item} />    
        ))}
    </dl>);

export default MatchList;
