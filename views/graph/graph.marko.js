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
    "><div id=container style=\"width: 1000px; height: 500px;\"></div><script src=/static/jquery/jquery.min.js></script><script src=/static/js/anychart-base.min.js type=text/javascript></script><a href=/  class=\"btn btn-primary\"><button class=\"btn btn-primary\">voltar</button></a><script>\n      anychart.onDocumentLoad(function () {\n        // create an instance of a pie chart\n      var $box3 = $(\"input#random\");\n      random = $box3.val();\n      var $box = $(\"input#data\");\n      data = $box.val();\n      var $box2 = $(\"input#string\");\n      string = $box2.val();\n      string = string.split(',');\n      data = data.split(',');\n      random = random.split(',');\n      var dados = [];\n      var array = [];\n      console.log(\"data:\", data);\n      console.log(\"string\", string);\n      for(var x = 0; x < data.length ; x++){\n        array = [string[x],data[x]];\n        dados.push(array);\n      }\n      console.log(dados);\n\n      chart = anychart.column();\n      chart.title(\"Pks - LogNormal\");\n      chart.dataArea().background().enabled(true);\n      chart.dataArea().background().fill(\"#665B59 0.2\");\n      var series = chart.column(dados);\n      chart.container(\"container\");\n      chart.draw();\n      string = [\"P1\",\"P2\",\"P3\",\"P2novo\", \"P3novo\"];\n      array = [];\n      dados = [];\n      for(var x = 0; x < random.length ; x++){\n        array = [string[x],random[x]];\n        dados.push(array);\n      }\n      console.log(dados);\n      \n      chart = anychart.line();\n      chart.title(\"Pontos\");\n      chart.dataArea().background().enabled(true);\n      chart.dataArea().background().fill(\"#665B59 0.2\");\n      var series = chart.line(dados);\n      chart.container(\"container\");\n      chart.draw();\n\n    });\n  </script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "9");

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
