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

const deleteSeries = async (id)=> {
    const deletedSeries = await connection.execute('DELETE FROM series WHERE id =?', [id ]);
    return deletedSeries
}

const updateSeries = async (id, series)=> {
    const {name, seasons} = series 
    const query = 'UPDATE series SET name = ?, seasons = ?  WHERE id =?'
    const [updatedSeries] = await connection.execute(query, [name, seasons, id]);
    return updatedSeries
}

export {
    getSeries,
    addSeries,
    deleteSeries,
    updateSeries
}
