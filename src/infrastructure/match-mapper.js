import { format } from '../lib/dateformat';

const headline = (item) => 
    (parseInt(item.hjemmehold.id) === 76)
        ? `Hjemme mod ${item.udehold.navn}`
        : `Ude mod ${item.hjemmehold.navn}`;

const makeDTO = (item) => {
    return Object.freeze({
        id: item.id,
        headline: headline(item),
        tournamentName: item.turnering.navn,
        matchTime: format(item.dato, item.tidspunkt),
        tvChannel: item.tvkanaler[0].navn
    });
}

export const matchMapper = matches => matches.map(item => makeDTO(item));
