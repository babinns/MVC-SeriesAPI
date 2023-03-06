async function listSeries () {
    const connect = await fetch("http://localhost:3000/series")
    const connected = await connect.json();
    return connected;

}

listSeries()

async function addsSeries(name, seasons, logo) {
    const connection = await fetch("http://localhost:3000/series", {
        method: "POST",
        headers: {
            "Content-type": "application/json" 
        },
        body: JSON.stringify({
            name: name,
            seasons: seasons,
            logo: logo
        })
    })
    const connected = await connection.json();
    return connected;
}

export const dbConnection = {
    listSeries,
    addsSeries
}