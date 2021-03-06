// Compiled using marko@4.23.15 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/pythonnode$1.0.0/views/home/home.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=pt-br><head><meta charset=utf-8><meta name=viewport content=\"width=device-width, initial-scale=1, shrink-to-fit=no\"><title>Calculo do Pk</title><link class=rounded-circle href=/static/icons/line-stats.svg rel=icon><link rel=stylesheet href=/static/css/foundation.min.css><link rel=stylesheet href=/nd_md/@fortawesome/fontawesome-free/css/all.min.css></head><body><div class=\"loader hidden\"><div class=grid-container></div><br><footer class=social-footer><div class=social-footer-icons><strong class=color5>Calculando...</strong></div></footer></div><div id=content><nav class=\"top-bar topbar-responsive\"><div class=top-bar-title><a class=topbar-responsive-logo href=/ ><div class=menu-icon-svg><svg xmlns=http://www.w3.org/2000/svg viewBox=\"0 0 442 442\"><path d=\"M432 383.991H58.009V10c0-5.523-4.478-10-10-10s-10 4.477-10 10v373.991H10c-5.522 0-10 4.477-10 10s4.478 10 10 10h28.009V432c0 5.523 4.478 10 10 10s10-4.477 10-10v-28.009H432c5.522 0 10-4.477 10-10s-4.478-10-10-10z\"></path><path d=\"M112.034 363.991c18.762 0 34.025-15.264 34.025-34.025a33.833 33.833 0 00-6.432-19.872l57.969-70.329a33.825 33.825 0 0012.966 2.573c8.642 0 16.536-3.244 22.544-8.571l43.007 26.218a33.95 33.95 0 00-1.049 8.391c0 18.762 15.264 34.025 34.025 34.025s34.025-15.264 34.025-34.025c0-9.864-4.223-18.757-10.951-24.977l69.884-145.678c1.814.3 3.673.464 5.57.464 18.762 0 34.025-15.264 34.025-34.025s-15.264-34.025-34.025-34.025-34.025 15.264-34.025 34.025c0 9.673 4.064 18.41 10.567 24.611L314.14 234.729a34.21 34.21 0 00-5.051-.377c-8.642 0-16.536 3.244-22.544 8.571l-43.007-26.218a33.95 33.95 0 001.049-8.391c0-18.762-15.264-34.026-34.025-34.026s-34.025 15.264-34.025 34.026a33.822 33.822 0 005.634 18.722l-58.489 70.96a33.855 33.855 0 00-11.648-2.055c-18.762 0-34.025 15.264-34.025 34.026s15.263 34.024 34.025 34.024zM407.618 50.134c7.733 0 14.025 6.292 14.025 14.025s-6.292 14.025-14.025 14.025-14.025-6.292-14.025-14.025 6.292-14.025 14.025-14.025zM309.09 254.351c7.733 0 14.025 6.292 14.025 14.025s-6.292 14.025-14.025 14.025-14.025-6.292-14.025-14.025 6.291-14.025 14.025-14.025zm-98.527-60.064c7.733 0 14.025 6.292 14.025 14.026 0 7.733-6.292 14.025-14.025 14.025s-14.025-6.292-14.025-14.025c-.001-7.734 6.291-14.026 14.025-14.026zM112.034 315.94c7.733 0 14.025 6.292 14.025 14.026 0 7.733-6.292 14.025-14.025 14.025s-14.025-6.292-14.025-14.025c0-7.734 6.292-14.026 14.025-14.026z\"></path></svg> &nbsp; <strong>Cálculo da Probabilidade da Log-Normal</strong></div></a></div></nav><br><form action=/graph method=post><div class=grid-container>");

  if (data.msg) {
    out.w("<div class=\"label alert\">" +
      marko_escapeXml(data.msg) +
      "</div>");
  }

  out.w("<h5>Escreva os valores de acordo com o seu separador</h5><div class=\"small-12 column\"><div class=form-floating-label><textarea name=story id=story rows=5 placeholder></textarea><label for=textarea>Digite os valores</label></div></div><br><div><div class=\"grid-x grid-padding-x\"><fieldset class=\"large-7 \"><legend>Selecione o seu separador</legend><div class=input-group><br><input onchange=box(this.checked); id=ponto_virgula type=checkbox class=radio value=ponto_virgula name=fooby[1][] checked><label for=ponto_virgula>Ponto e virgula</label><input onchange=box(this.checked); id=virgula type=checkbox class=radio value=virgula name=fooby[1][]><label for=virgula>Virgula</label><input onchange=box(this.checked); id=espaco type=checkbox class=radio value=espaco name=fooby[1][]><label for=espaco>Espaço</label></div></fieldset></div></div><div><button id=enviar type=submit class=\"button primary\">Enviar</button></div></div></form><form action=/upload method=post enctype=multipart/form-data><div class=grid-container><h5>Importe um arquivo csv de uma coluna</h5><div class=button-group><label for=filetoupload class=\"button secondary\"><i class=\"fas fa-file-csv\"></i>&nbsp;Upload arquivo .csv</label><input type=file name=filetoupload id=filetoupload class=show-for-sr><button id=upload type=submit class=\"button primary\">Enviar arquivo</button></div></div></form><br><footer class=social-footer><div class=social-footer-left><p>&copy; 2021 Josehpequeno</p></div><div class=social-footer-icons><li class=\"menu simple\"><ul><a href=https://gitlab.com/Josehpequeno/  class=\"transparente color5\"><i class=\"fab fa-gitlab\" aria-hidden=true></i></a></ul><ul><a href=https://github.com/Josehpequeno/  class=\"transparente color5\"><i class=\"fab fa-github\" aria-hidden=true></i></a></ul><ul><a href=https://www.linkedin.com/in/hicaro-jose-2aa269166/  class=\"transparente color5\"><i class=\"fab fa-linkedin\" aria-hidden=true></i></a></ul><ul><a href=\"mailto:hicarojbs21@gmail.com?subject=Site Calculo-Pk\" class=\"transparente color5\"><i class=\"fas fa-envelope-square\" aria-hidden=true></i></a></ul></li></div><div class=social-footer-icons><small>Favicon made by&nbsp;</small><a href=https://www.freepik.com title=Freepik class=color2><small>Freepik&nbsp;</small></a><small>from&nbsp;</small><a href=https://www.flaticon.com/  title=Flaticon class=color2><small>flaticon</small></a></div></footer></div><script src=/nd_md/jquery/dist/jquery.min.js></script><script src=/nd_md/jquery/dist/jquery.slim.min.js></script><script src=/nd_md/popper.js/dist/umd/popper.min.js></script><script>\n        $('#enviar').click(function() {\n            $(\"#content\").addClass('hidden');\n            $(\".loader\").removeClass('hidden');\n        });\n        $('#upload').click(function() {\n            $(\"#content\").addClass('hidden');\n            $(\".loader\").removeClass('hidden');\n        });\n    </script><script>\n      $('.form-floating-label input, .form-floating-label textarea').focusin(function(){\n        $(this).parent().addClass('has-value');\n      });\n\n      $('.form-floating-label input, .form-floating-label textarea').blur(function(){\n        if(!$(this).val().length > 0) {\n          $(this).parent().removeClass('has-value');\n        }\n      });\n    </script><script>\n        /*M.textareaAutoResize($('#story'));\n        function textarea() {\n            var ta = document.querySelector('textarea');\n            //autosize(ta);\n        }*/\n        $(\"input:checkbox.radio\").on('click', function() {//muda a div para para visivel\n            var $box = $(this);\n            if ($box.is(\":checked\")) {\n                var group = \"input:checkbox[name='\" + $box.attr(\"name\") + \"']\";\n                $(group).prop(\"checked\", false);\n                $box.prop(\"checked\", true);//muda quando uma box vai pra true a outra para false.\n            } else {\n                $box.prop(\"checked\", false);\n                $(\"#hidden\").hide();\n            }\n            });\n            function box(checked) {//muda o valor de checked para true toda vez que é desmarcado as duas boxex.\n                var $box = $(\"input:checkbox.radio#ponto_virgula\");\n                if(checked === false){\n                    $box.prop(\"checked\", true);\n                }\n            }\n    </script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "81");

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
