import React from 'react';
import { format } from '../lib/dateformat';


const data = {
  home: {
    name: 'Real Madrid',
    icon: 'realmadrid.png'
  },
  away: {
    name: 'Athletic',
    icon: 'athletic.png'
  },
  tournamentName: 'Supercopa de España',
  stadiumName: 'Rey Fahd',
  tvChannelName: '6\'eren',
  date: '2022-01-16',
  time: '19:30',
  links: {
    truppen: 1,
    optakt: 2,
    karakter: 3,
    statistik: 4,
    referat: 5,
    ciffertips: 6
  }
};

const imagePath = (filename) => `https://madridista.dk/images/team_icons/${filename}`;

export const NextMatch = (props) => {
  return (
    <div className="next_game" style={{'text-align': 'center'}}>
      <table class="table-centered">
      <tr>
        <td align="center" valign="middle" style={{width:'85px'}}><img style={{'max-height':'54px','max-width':'85px'}} 
        src={imagePath(data.home.icon)} border="0" /></td>
        <td>vs.</td>
        <td align="center" valign="middle" style={{width:'85px'}}><img style={{'max-height':'54px','max-width':'85px'}}
        src={imagePath(data.away.icon)} border="0" /></td>
      </tr>

      <tr>
        <td style={{'text-align':'center'}}>{data.home.name}</td>
        <td>&nbsp;</td>
        <td style={{'text-align':'center'}}>{data.away.name}</td>
      </tr>
      </table>

      {format(data.date, data.time)}
      <br />
      {data.tournamentName}
      <br />
      {data.stadiumName}
      <br />
      TV Kanal: {data.tvChannelName}
      <br />
    </div>
  );
}
