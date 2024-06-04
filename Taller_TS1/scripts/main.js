import listadoSeries from "./data.js";
var seriesTable = document.getElementById('series');
mostrarSeries(listadoSeries);
mostrarPromedioTemporadas(listadoSeries);
function mostrarSeries(series) {
    var seriesTbody = document.createElement("tbody");
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        var trElement = document.createElement("tr");
        trElement.classList.add("table-active");
        trElement.innerHTML =
            "<td><b>".concat(serie.id, "</b></td>\n        <td class=\"name\">").concat(serie.name, "</td>\n        <td>").concat(serie.channel, "</td>\n        <td>").concat(serie.seasons, "</td>");
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
