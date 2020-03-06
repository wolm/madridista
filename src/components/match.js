import React from 'react'
import { format } from '../lib/dateformat';

const Match = ({ data }) => {
    const headline = (parseInt(data.hjemmehold.id) === 76)
        ? `Hjemme mod ${data.udehold.navn}`
        : `Ude mod ${data.hjemmehold.navn}`;

    return (
        <>
        <dt>{headline}</dt>
        <dd>
            <span className="createdby">{data.turnering.navn}</span>
            <br/>
            {format(data.dato, data.tidspunkt)}
            <br/>
            {data.tvkanaler[0].navn}
        </dd>
        </>)
}

export default Match;
