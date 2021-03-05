// Compiled using marko@4.23.14 - DO NOT EDIT
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

  out.w("<!DOCTYPE html><html lang=pt-br><head></head><body><input type=hidden id=data name=data" +
    marko_attr("value", "" + data.dados) +
    "><input type=hidden id=random name=random" +
    marko_attr("value", "" + data.random) +
    "><input type=hidden id=string name=string" +
    marko_attr("value", "" + data.strings) +
    "><input type=hidden id=entrada name=entrada" +
    marko_attr("value", "" + data.entrada) +
    "><div id=container2 style=\"width: 100%; height: 400px;\"></div><div id=container style=\"width: 100%; height: 600px;\"></div><script src=/static/jquery/jquery.min.js></script><script src=/static/js/anychart-base.min.js type=text/javascript></script><a href=/  class=\"btn btn-primary\"><button class=\"btn btn-primary\">voltar</button></a><script>\n      anychart.onDocumentLoad(function () {\n        // create an instance of a pie chart\n      \n      var $box = $(\"input#data\");\n      var data = $box.val();\n      var $box2 = $(\"input#string\");\n      var string = $box2.val();\n      var $box3 = $(\"input#random\");\n      var random = $box3.val();\n      var $box4 = $(\"input#entrada\");\n      var entrada = $box4.val();\n      string = string.split(',');\n      data = data.split(',');\n      random = random.split(',');\n      entrada = entrada.split(',');\n      var dados = [];\n      var array = [];\n      console.log(\"data:\", data);\n      console.log(\"string\", string);\n      for(var x = 0; x < data.length ; x++){\n        array = [string[x],data[x]];\n        dados.push(array);\n      }\n      console.log(dados);\n\n      chart = anychart.column();\n      chart.title(\"Pks - LogNormal\");\n      chart.dataArea().background().enabled(true);\n      chart.dataArea().background().fill(\"#665B59 0.2\");\n      var series = chart.column(dados);\n      chart.container(\"container2\");\n      chart.draw();\n      \n      string = [\"P1\",\"P2\",\"P3\",\"P2novo\", \"P3novo\"];\n      array = [];\n      dados = [];\n      for(var x = 0; x < random.length ; x++){\n        array = [string[x],random[x]];\n        dados.push(array);\n      }\n      array = [];\n      var dados2 = []; \n      var ctrl = entrada.length/5;\n      var z = 0;\n      var p = 0;\n      for(var x = 0; x < entrada.length ; x++){\n        if(x == z){\n          array = [string[p],entrada[x]];\n          p++;\n          z += ctrl;\n          if (z > entrada.length){\n            z = entrada.length;\n          }\n        } else {\n          array = [`valor ${x}`, entrada[x]];\n        }\n        dados2.push(array);\n      }\n      dados = anychart.data.set(dados);\n      dados2 = anychart.data.set(dados2);\n      dados2 = dados2.mapAs({x: 0, value: 1});\n      dados = dados.mapAs({x: 0, value: 2});\n      chart = anychart.line();\n      chart.interactivity().hoverMode(\"single\");\n      chart.title(\"Pontos\");\n      chart.dataArea().background().enabled(true);\n      chart.dataArea().background().fill(\"#665B59 0.2\");\n      var series2 = chart.line(dados2);\n      series2.normal().stroke(\"#00cc99\");\n      series2.hovered().stroke(\"#00cc99\", 2);\n      series2.selected().stroke(\"#00cc99\", 4);\n      var series = chart.line(dados);\n      series.normal().stroke(\"#0066cc\", 1, \"10 5\", \"round\");\n      series.hovered().stroke(\"#0066cc\", 2, \"10 5\", \"round\");\n      series.selected().stroke(\"#0066cc\", 4, \"10 5\", \"round\");\n      chart.container(\"container\");\n      chart.draw();\n\n    });\n  </script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "11");

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