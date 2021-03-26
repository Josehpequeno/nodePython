// Compiled using marko@4.23.15 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/pythonnode$1.0.0/views/graph/graph.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=pt-br><head><meta charset=utf-8><meta name=viewport content=\"width=device-width, initial-scale=1, shrink-to-fit=no\"><title>Calculo do Pk</title><link class=rounded-circle href=/static/icons/line-stats.svg rel=icon><link rel=stylesheet href=/static/css/foundation.min.css><link rel=stylesheet href=/nd_md/@fortawesome/fontawesome-free/css/all.min.css></head><body><nav class=\"top-bar topbar-responsive\"><div class=top-bar-title><a class=topbar-responsive-logo href=/ ><div class=menu-icon-svg><svg xmlns=http://www.w3.org/2000/svg viewBox=\"0 0 442 442\"><path d=\"M432 383.991H58.009V10c0-5.523-4.478-10-10-10s-10 4.477-10 10v373.991H10c-5.522 0-10 4.477-10 10s4.478 10 10 10h28.009V432c0 5.523 4.478 10 10 10s10-4.477 10-10v-28.009H432c5.522 0 10-4.477 10-10s-4.478-10-10-10z\"></path><path d=\"M112.034 363.991c18.762 0 34.025-15.264 34.025-34.025a33.833 33.833 0 00-6.432-19.872l57.969-70.329a33.825 33.825 0 0012.966 2.573c8.642 0 16.536-3.244 22.544-8.571l43.007 26.218a33.95 33.95 0 00-1.049 8.391c0 18.762 15.264 34.025 34.025 34.025s34.025-15.264 34.025-34.025c0-9.864-4.223-18.757-10.951-24.977l69.884-145.678c1.814.3 3.673.464 5.57.464 18.762 0 34.025-15.264 34.025-34.025s-15.264-34.025-34.025-34.025-34.025 15.264-34.025 34.025c0 9.673 4.064 18.41 10.567 24.611L314.14 234.729a34.21 34.21 0 00-5.051-.377c-8.642 0-16.536 3.244-22.544 8.571l-43.007-26.218a33.95 33.95 0 001.049-8.391c0-18.762-15.264-34.026-34.025-34.026s-34.025 15.264-34.025 34.026a33.822 33.822 0 005.634 18.722l-58.489 70.96a33.855 33.855 0 00-11.648-2.055c-18.762 0-34.025 15.264-34.025 34.026s15.263 34.024 34.025 34.024zM407.618 50.134c7.733 0 14.025 6.292 14.025 14.025s-6.292 14.025-14.025 14.025-14.025-6.292-14.025-14.025 6.292-14.025 14.025-14.025zM309.09 254.351c7.733 0 14.025 6.292 14.025 14.025s-6.292 14.025-14.025 14.025-14.025-6.292-14.025-14.025 6.291-14.025 14.025-14.025zm-98.527-60.064c7.733 0 14.025 6.292 14.025 14.026 0 7.733-6.292 14.025-14.025 14.025s-14.025-6.292-14.025-14.025c-.001-7.734 6.291-14.026 14.025-14.026zM112.034 315.94c7.733 0 14.025 6.292 14.025 14.026 0 7.733-6.292 14.025-14.025 14.025s-14.025-6.292-14.025-14.025c0-7.734 6.292-14.026 14.025-14.026z\"></path></svg> &nbsp; <strong>Cálculo da Probabilidade da Log-Normal</strong></div></a></div></nav><br><div class=grid-container><input type=hidden id=data name=data" +
    marko_attr("value", "" + data.dados) +
    "><input type=hidden id=sar name=sar" +
    marko_attr("value", "" + data.sar) +
    "><input type=hidden id=string name=string" +
    marko_attr("value", "" + data.strings) +
    "><input type=hidden id=entrada name=entrada" +
    marko_attr("value", "" + data.entrada) +
    "><div id=container2 style=\"width: 100%; height: 400px;\"></div><div id=container3 style=\"width: 100%; height: 600px;\"></div><form action=/recalcular method=post><div class=button-group><a class=button href=/ >voltar</a></div></form></div><footer class=social-footer><div class=social-footer-left><p>&copy; 2021 Josehpequeno</p></div><div class=social-footer-icons><li class=\"menu simple\"><ul><a href=https://gitlab.com/Josehpequeno/  class=\"transparente color5\"><i class=\"fab fa-gitlab\" aria-hidden=true></i></a></ul><ul><a href=https://github.com/Josehpequeno/  class=\"transparente color5\"><i class=\"fab fa-github\" aria-hidden=true></i></a></ul><ul><a href=https://www.linkedin.com/in/hicaro-jose-2aa269166/  class=\"transparente color5\"><i class=\"fab fa-linkedin\" aria-hidden=true></i></a></ul><ul><a href=\"mailto:hicarojbs21@gmail.com?subject=Site Calculo-Pk\" class=\"transparente color5\"><i class=\"fas fa-envelope-square\" aria-hidden=true></i></a></ul></li></div><div class=social-footer-icons><small>Favicon made by&nbsp;</small><a href=https://www.freepik.com title=Freepik class=color2><small>Freepik&nbsp;</small></a><small>from&nbsp;</small><a href=https://www.flaticon.com/  title=Flaticon class=color2><small>flaticon</small></a></div></footer><script src=/static/jquery/jquery.min.js></script><script src=/static/js/anychart-base.min.js type=text/javascript></script><script>\n      anychart.onDocumentLoad(function () {\n        // create an instance of a pie chart\n      \n      var $box = $(\"input#data\");\n      var data = $box.val();\n      var $box2 = $(\"input#string\");\n      var string = $box2.val();\n      var $box3 = $(\"input#sar\");\n      var sar = $box3.val();\n      var $box4 = $(\"input#entrada\");\n      var entrada = $box4.val();\n      string = string.split(',');\n      data = data.split(',');\n      sar = sar.split(',');\n      entrada = entrada.split(',');\n      var dados = [];\n      var array = [];\n      console.log(\"data:\", data);\n      console.log(\"string\", string);\n      for(var x = 0; x < data.length ; x++){\n        array = [string[x],data[x]];\n        dados.push(array);\n      }\n      console.log(dados);\n\n      var chart = anychart.column();\n      chart.title(\"Pks - LogNormal\");\n      chart.dataArea().background().enabled(true);\n      chart.dataArea().background().fill(\"#665B59 0.2\");\n      var series = chart.column(dados);\n      chart.container(\"container2\");\n      chart.draw();\n      \n      string = [\"P1\",\"P2\",\"P3\",\"P2novo\", \"P3novo\"];\n      array1 = [];\n      array2 = [];\n      array3 = [];\n      array4 = [];\n      array5 = [];\n      var dados1 = [];\n      var dados2 = [];\n      var dados3 = [];\n      var dados4 = [];\n      var dados5 = [];\n      array = [];\n      dados = []; \n      for(var x = 0; x < entrada.length ; x++){\n        array = [`valor ${x}`, entrada[x]];\n        array1 = [`valor ${x}`, sar[x]];\n          //array1 = array;\n        dados.push(array);\n        dados1.push(array1);\n      }\n      /*dados2 = anychart.data.set(dados2);\n      chart = anychart.line();\n      \n      chart.title(\"Dados\");\n      chart.dataArea().background().enabled(true);\n      chart.dataArea().background().fill(\"#665B59 0.2\");\n      var series2 = chart.line(dados2);\n      series2.name(\"dados\");\n      series2.normal().stroke(\"#00cc99\");\n      series2.hovered().stroke(\"#00cc99\", 2);\n      series2.selected().stroke(\"#00cc99\", 4);\n      chart.container(\"container\");\n      chart.draw();*/\n      /*\n      dados = anychart.data.set(dados);\n      chart = anychart.line();\n      chart.title(\"Pontos\");\n      chart.dataArea().background().enabled(true);\n      chart.dataArea().background().fill(\"#665B59 0.2\");\n      var series = chart.line(dados);\n      series.name(\"pontos\")\n      series.normal().stroke(\"#0066cc\", 1, \"10 5\", \"round\");\n      series.hovered().stroke(\"#0066cc\", 2, \"10 5\", \"round\");\n      series.selected().stroke(\"#0066cc\", 4, \"10 5\", \"round\");\n      chart.container(\"container\");\n      chart.draw();*/\n      stage = anychart.graphics.create(\"container3\");\n\n      // create a chart\n      var chart = anychart.line();\n\n      dataSet = (dados);\n      dataSet1 = (dados1);\n      \n      series = chart.line(dataSet);\n      series.name(\"Valor Real\")\n      series1 = chart.line(dataSet1);\n      series1.stroke(\"green\");\n      series1.name(\"SAR\");\n      var scale = chart.yScale();\n      // Sets scale maximum.\n      //scale.maximum(2);\n\n      // add a title standalone object on the chart\n      chart.title(\"Dados e SAR\");\n      chart.dataArea().background().enabled(true);\n      chart.dataArea().background().fill(\"#665B59 0.2\");\n\n      // put the chart on a stage and draw it\n      chart.container(stage);\n      chart.draw();\n\n      // put the title object on a stage\n      title.container(stage);\n      title.draw();\n    });\n  </script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "52");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/pythonnode$1.0.0/views/graph/graph.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
