import connection from "./db.js"

const getSeries = async ()=> {

    const series = await connection.execute("SELECT * FROM series");
    return series[0];

};

const addSeries = async (series,seasons, logo)=> {

    const {name} = series;
    const {season} = seasons;
    const {images} = logo;
    const query = 'INSERT INTO series(name, seasons, logo) VALUES(?, ?, ?)';
    const newSeries = await connection.execute(query, [series, seasons, logo]);

};

const deleteSeries = async (id)=> {
    const deletedSeries = await connection.execute('DELETE FROM series WHERE id =?', [id ]);
    return deletedSeries
}

const updateSeries = async (id, series)=> {
    const {name, seasons, logo} = series 
    const query = 'UPDATE series SET name = ?, seasons = ?, logo = ? WHERE id =?'
    const [updatedSeries] = await connection.execute(query, [name, seasons, logo, id]);
    return updatedSeries
}

const searchByStatus = async(status) => {
    
    const query = 'SELECT * FROM series WHERE ongoing = ?'
    const [filteredSeries] = await connection.execute(query, [status]);
    return filteredSeries;
}

export {
    getSeries,
    addSeries,
    deleteSeries,
    updateSeries,
    searchByStatus
}
