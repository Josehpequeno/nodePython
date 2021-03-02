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

  out.w("<!DOCTYPE html><html lang=pt-br><head></head><body><form action=/graph method=post><div class=form-group><textarea name=story id=story class=\"materialize-textarea form-control\" data-length=120>\n                </textarea></div><div class=form-group><button type=submit class=\"btn btn-primary btn-block\">Enviar</button></div><div class=col-md-8><p><strong>Tipo de separador</strong></p><div class=input-group-prepend><label class=container1><input onchange=box(this.checked); id=ponto_virgula type=checkbox class=radio value=ponto_virgula name=fooby[1][] checked=true><span class=checkmark></span> ;</label><label class=container1><input onchange=box(this.checked); id=virgula type=checkbox class=radio value=virgula name=fooby[1][]><span class=checkmark></span> ,</label><label class=container1><input onchange=box(this.checked); id=espaco type=checkbox class=radio value=espaco name=fooby[1][]><span class=checkmark></span> Espaço</label></div></div></form><script src=/static/jquery/jquery.min.js></script><script>\n        /*M.textareaAutoResize($('#story'));\n        function textarea() {\n            var ta = document.querySelector('textarea');\n            //autosize(ta);\n        }*/\n        $(\"input:checkbox.radio\").on('click', function() {//muda a div para para visivel\n            var $box = $(this);\n            if ($box.is(\":checked\")) {\n                var group = \"input:checkbox[name='\" + $box.attr(\"name\") + \"']\";\n                $(group).prop(\"checked\", false);\n                $box.prop(\"checked\", true);//muda quando uma box vai pra true a outra para false.\n            } else {\n                $box.prop(\"checked\", false);\n                $(\"#hidden\").hide();\n            }\n            });\n            function box(checked) {//muda o valor de checked para true toda vez que é desmarcado as duas boxex.\n                var $box = $(\"input:checkbox.radio#ponto_virgula\");\n                if(checked === false){\n                    $box.prop(\"checked\", true);\n                }\n            }\n    </script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "21");

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
