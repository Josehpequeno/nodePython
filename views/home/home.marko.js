// Compiled using marko@4.23.14 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/pythonnode$1.0.0/views/home/home.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=pt-br><head><meta charset=utf-8><meta name=viewport content=\"width=device-width, initial-scale=1, shrink-to-fit=no\"><title>Calculp do Pk</title><link href=/static/bootstrap/dist/css/bootstrap.min.css rel=stylesheet><link href=/static/bootstrap/dist/css/bootstrap.css rel=stylesheet><link rel=stylesheet href=static/font-awesome/css/font-awesome.min.css><link rel=stylesheet href=static/css/textarea.css><style>\n      * {\n        box-sizing: border-box;\n      }\n      body {\n        margin: 0;\n        min-width: 250px;\n        background-color: #4C4C4C;\n        font-family: \"Roboto\", sans-serif;\n      }\n    </style></head><body><div class=container><div class=card><div class=card-header>header</div><div class=\"card-body container \" align=center><div class=\"col-md-6 w-75 p-3 h-100 d-inline-block\"><form action=/graph method=post><div class=form-group><textarea name=story id=story class=form-control aria-label=\"With textarea\">\n                </textarea></div><div class=form-group><button type=submit class=\"btn btn-primary\">Enviar</button></div><div class=\"col col align-self-start\"><p align=left><strong>Tipo de separador</strong></p><div class=\"input-group-prepend row\"><div class=col><label class=container1><input onchange=box(this.checked); id=ponto_virgula type=checkbox class=radio value=ponto_virgula name=fooby[1][] checked=true><span class=checkmark></span> ;</label></div><div class=col><label class=container1><input onchange=box(this.checked); id=virgula type=checkbox class=radio value=virgula name=fooby[1][]><span class=checkmark></span> ,</label></div><div class=col><label class=container1><input onchange=box(this.checked); id=espaco type=checkbox class=radio value=espaco name=fooby[1][]><span class=checkmark></span> Espaço</label></div></div></div></form></div></div><div><form action=/upload method=post enctype=multipart/form-data><input type=file name=filetoupload><br><input type=submit></form></div><div class=\"card-footer text-muted\">footer</div></div></div><script src=/nd_md/jquery/dist/jquery.min.js></script><script src=/nd_md/bootstrap/dist/js/bootstrap.min.js></script><script src=/nd_md/jquery/dist/jquery.slim.min.js></script><script src=/nd_md/popper.js/dist/umd/popper.min.js></script><script>\n        /*M.textareaAutoResize($('#story'));\n        function textarea() {\n            var ta = document.querySelector('textarea');\n            //autosize(ta);\n        }*/\n        $(\"input:checkbox.radio\").on('click', function() {//muda a div para para visivel\n            var $box = $(this);\n            if ($box.is(\":checked\")) {\n                var group = \"input:checkbox[name='\" + $box.attr(\"name\") + \"']\";\n                $(group).prop(\"checked\", false);\n                $box.prop(\"checked\", true);//muda quando uma box vai pra true a outra para false.\n            } else {\n                $box.prop(\"checked\", false);\n                $(\"#hidden\").hide();\n            }\n            });\n            function box(checked) {//muda o valor de checked para true toda vez que é desmarcado as duas boxex.\n                var $box = $(\"input:checkbox.radio#ponto_virgula\");\n                if(checked === false){\n                    $box.prop(\"checked\", true);\n                }\n            }\n    </script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "43");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/pythonnode$1.0.0/views/home/home.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
