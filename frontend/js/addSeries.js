import { dbConnection } from "./dbConnection.js";

const form = document.querySelector("[data-form]")

async function addSeries(event) {
    event.preventDefault();
    const logo = document.querySelector("[data-img]").value
    const series = document.querySelector("[data-seriesName]").value
    const seasons = document.querySelector("[data-seasons]").value

    await dbConnection.addsSeries(series, seasons, logo);
}


form.addEventListener("submit", event => addSeries(event));

