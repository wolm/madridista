const days = [ "Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag" ];
const pad2 = (num) => ("" + (100 + parseInt(num))).substring(1);

export const format = (dateString, timeString) => {
    const date = new Date(Date.parse(`${dateString}T${timeString}`));

    return `${
        days[date.getDay()]}, ${
        date.getDate()}/${
        pad2(date.getMonth() + 1)} ${
        date.getHours()}:${
        pad2(date.getMinutes())}`;
}
