import connection from "./db.js"

const getSeries = async ()=> {

    const series = await connection.execute("SELECT * FROM series");
    return series[0];

};

const addSeries = async (series)=> {

    const {title} = series;
    const query = 'INSERT INTO series(name, seasons) VALUES(?, ?)';
    const newSeries = await connection.execute(query, [series, 1])

};


export {
    getSeries,
    addSeries
}
