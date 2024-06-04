import listadoSeries from "./data.js";
var seriesTable = document.getElementById('series');
var seriesDetailCard = document.getElementById('seriesDetail');
mostrarSeries(listadoSeries);
mostrarPromedioTemporadas(listadoSeries);
mostrarDetalleSerie(listadoSeries[0]);
function mostrarSeries(series) {
    var seriesTbody = document.createElement("tbody");
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        var trElement = document.createElement("tr");
        trElement.classList.add("table-active");
        trElement.innerHTML =
            "<td><b>".concat(serie.id, "</b></td>\n        <td><a href=\"#").concat(serie.id, "\">").concat(serie.name, "</a></td>\n        <td>").concat(serie.channel, "</td>\n        <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    }
    seriesTable.appendChild(seriesTbody);
}
function calcularPromedioTemporadas(series) {
    var totalTemporadas = 0;
    for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
        var serie = series_2[_i];
        totalTemporadas += serie.seasons;
    }
    return totalTemporadas / series.length;
}
function mostrarPromedioTemporadas(series) {
    var averageSeasons = document.getElementById('averageSeasons');
    var promedio = calcularPromedioTemporadas(series);
    averageSeasons.innerHTML = "Seasons average: ".concat(promedio);
}
function mostrarDetalleSerie(serie) {
    var imagen = document.createElement("img");
    imagen.classList.add("card-img-top");
    imagen.setAttribute("src", serie.image);
    seriesDetailCard.appendChild(imagen);
    var titulo = document.createElement("h5");
    titulo.classList.add("card-title");
    titulo.innerHTML = serie.name;
    seriesDetailCard.appendChild(titulo);
    var description = document.createElement("p");
    description.classList.add("card-text");
    description.innerHTML = serie.description + "<br><br><a href=\"".concat(serie.url, "\">").concat(serie.url, "</a>");
    seriesDetailCard.appendChild(description);
}
