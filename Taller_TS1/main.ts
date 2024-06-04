import { Serie } from "./serie.js";
import  listadoSeries  from "./data.js";

let seriesTable: HTMLElement = document.getElementById('series')!;

mostrarSeries(listadoSeries);
mostrarPromedioTemporadas(listadoSeries);

function mostrarSeries(series: Serie[]){
    let seriesTbody: HTMLElement = document.createElement("tbody");
    for (let serie of series) {
        let trElement: HTMLElement = document.createElement("tr");
        trElement.classList.add("table-active");
        trElement.innerHTML = 
        `<td><b>${serie.id}</b></td>
        <td class="name">${serie.name}</td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>`
        seriesTbody.appendChild(trElement);
    }
    seriesTable.appendChild(seriesTbody);
}

function calcularPromedioTemporadas(series: Serie[]): number {
    let totalTemporadas: number = 0;
    for (let serie of series) {
        totalTemporadas += serie.seasons;
    }
    return totalTemporadas / series.length;
}

function mostrarPromedioTemporadas(series: Serie[]){
    let averageSeasons: HTMLElement = document.getElementById('averageSeasons')!;
    let promedio: number = calcularPromedioTemporadas(series);
    averageSeasons.innerHTML = `Seasons average: ${promedio}`;
}