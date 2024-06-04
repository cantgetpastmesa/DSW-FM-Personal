import { Serie } from "./serie.js";
import  listadoSeries  from "./data.js";

let seriesTable: HTMLElement = document.getElementById('series')!;
let seriesDetailCard: HTMLElement = document.getElementById('seriesDetail')!;

mostrarSeries(listadoSeries);
mostrarPromedioTemporadas(listadoSeries);
mostrarDetalleSerie(listadoSeries[0]);

function mostrarSeries(series: Serie[]){
    let seriesTbody: HTMLElement = document.createElement("tbody");
    for (let serie of series) {
        let trElement: HTMLElement = document.createElement("tr");
        trElement.classList.add("table-active");
        trElement.innerHTML = 
        `<td><b>${serie.id}</b></td>
        <td><a href="#${serie.id}">${serie.name}</a></td>
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

function mostrarDetalleSerie(serie: Serie){
    let imagen: HTMLElement = document.createElement("img");
    imagen.classList.add("card-img-top");
    imagen.setAttribute("src", serie.image);
    seriesDetailCard.appendChild(imagen);
    let titulo: HTMLElement = document.createElement("h5");
    titulo.classList.add("card-title");
    titulo.innerHTML = serie.name;
    seriesDetailCard.appendChild(titulo);
    let description: HTMLElement = document.createElement("p");
    description.classList.add("card-text");
    description.innerHTML = serie.description + `<br><br><a href="${serie.url}">${serie.url}</a>`;
    seriesDetailCard.appendChild(description);
}
