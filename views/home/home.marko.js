// Compiled using marko@4.23.15 - DO NOT EDIT
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

  out.w("<!DOCTYPE html><html lang=pt-br><head><meta charset=utf-8><meta name=viewport content=\"width=device-width, initial-scale=1, shrink-to-fit=no\"><title>Calculo do Pk</title><link class=rounded-circle href=/static/icons/line-stats.svg rel=icon><link rel=stylesheet href=/static/css/foundation.min.css><link rel=stylesheet href=/nd_md/@fortawesome/fontawesome-free/css/all.css></head><body><nav class=\"top-bar topbar-responsive\"><div class=top-bar-title><a class=topbar-responsive-logo href=/ ><strong>Cálculo da Probabilidade da Log-Normal</strong></a></div></nav><br><form action=/graph method=post><div class=grid-container><h5>Escreva os valores de acordo com o seu separador</h5><div class=\"small-12 column\"><div class=form-floating-label><textarea name=story id=story rows=5 placeholder></textarea><label for=textarea>Digite os valores</label></div></div><br><div><div class=\"grid-x grid-padding-x\"><fieldset class=\"large-7 cell\"><legend>Selecione o seu separador</legend><input onchange=box(this.checked); id=ponto_virgula type=checkbox class=radio value=ponto_virgula name=fooby[1][] checked=true><label for=ponto_virgula>Ponto e virgula</label><input onchange=box(this.checked); id=virgula type=checkbox class=radio value=virgula name=fooby[1][]><label for=virgula>Virgula</label><input onchange=box(this.checked); id=espaco type=checkbox class=radio value=espaco name=fooby[1][]><label for=espaco>Espaço</label></fieldset></div></div><br><div><button type=submit class=\"button primary\">Enviar</button></div></div></form><form action=/upload method=post enctype=multipart/form-data><div class=grid-container><h5>Importe um arquivo csv de uma coluna</h5><div class=button-group><label for=filetoupload class=button><i class=\"fas fa-file-csv\">Upload arquivo .csv</i></label><input type=file name=filetoupload id=filetoupload class=show-for-sr><button type=submit class=\"button primary\">Enviar arquivo</button></div></div></form><footer class=social-footer><div class=social-footer-left><p>&copy; 2021 Copyright</p></div><div class=social-footer-icons><li class=\"menu simple\"><ul><a href=https://gitlab.com/Josehpequeno/ ><i class=\"fab fa-gitlab\" aria-hidden=true>Josehpequeno</i></a></ul><ul><a href=https://github.com/Josehpequeno><i class=\"fab fa-github\" aria-hidden=true>Josehpequeno</i></a></ul><ul><a href=https://www.linkedin.com/in/hicaro-jose-2aa269166/ ><i class=\"fab fa-linkedin\" aria-hidden=true>hicaro-jose</i></a></ul><ul></ul><ul>Icons made by <a href=https://www.freepik.com title=Freepik>Freepik</a> from <a href=https://www.flaticon.com/  title=Flaticon>www.flaticon.com</a></ul></li></div></footer><script src=/nd_md/jquery/dist/jquery.min.js></script><script src=/nd_md/bootstrap/dist/js/bootstrap.min.js></script><script src=/nd_md/jquery/dist/jquery.slim.min.js></script><script src=/nd_md/popper.js/dist/umd/popper.min.js></script><script>\n      $('.form-floating-label input, .form-floating-label textarea').focusin(function(){\n        $(this).parent().addClass('has-value');\n      });\n\n      $('.form-floating-label input, .form-floating-label textarea').blur(function(){\n        if(!$(this).val().length > 0) {\n          $(this).parent().removeClass('has-value');\n        }\n      });\n    </script><script>\n        /*M.textareaAutoResize($('#story'));\n        function textarea() {\n            var ta = document.querySelector('textarea');\n            //autosize(ta);\n        }*/\n        $(\"input:checkbox.radio\").on('click', function() {//muda a div para para visivel\n            var $box = $(this);\n            if ($box.is(\":checked\")) {\n                var group = \"input:checkbox[name='\" + $box.attr(\"name\") + \"']\";\n                $(group).prop(\"checked\", false);\n                $box.prop(\"checked\", true);//muda quando uma box vai pra true a outra para false.\n            } else {\n                $box.prop(\"checked\", false);\n                $(\"#hidden\").hide();\n            }\n            });\n            function box(checked) {//muda o valor de checked para true toda vez que é desmarcado as duas boxex.\n                var $box = $(\"input:checkbox.radio#ponto_virgula\");\n                if(checked === false){\n                    $box.prop(\"checked\", true);\n                }\n            }\n    </script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "61");

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
