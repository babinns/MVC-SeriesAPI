import { dbConnection } from "./dbConnection.js";

const seriesList = document.querySelector("[data-logos]")

function createsSeries(logo) {
    const series = document.createElement("li");
    series.className = "series-item";
    series.innerHTML = `
    <li class="series-item"><img src="${logo}" alt ="series logo" width="130" height="200" class="image" id="image"></li>

    `
    return series;

}

async function listSeries() {
    const list = await dbConnection.listSeries();
    console.log(list)
    list.forEach(element => seriesList.appendChild(createsSeries(element.logo)));
}

listSeries()
