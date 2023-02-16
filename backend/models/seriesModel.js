import connection from "./db.js"

const getSeries = async ()=> {

    const series = await connection.execute("SELECT * FROM series");
    return series[0];

};

const addSeries = async (series,seasons)=> {

    const {name} = series;
    const {season} = seasons;
    const query = 'INSERT INTO series(name, seasons) VALUES(?, ?)';
    const newSeries = await connection.execute(query, [series, seasons]);

};


export {
    getSeries,
    addSeries
}
