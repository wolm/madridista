import React from 'react'

const Match = ({ data }) => (
        <>
        <dt>{data.headline}</dt>
        <dd>
            <span className="createdby">{data.tournamentName}</span>
            <br/>
            {data.matchTime}
            <br/>
            {data.tvChannel}
        </dd>
        </>);

export default Match;
