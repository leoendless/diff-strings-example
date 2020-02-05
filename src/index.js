import { createPatch } from "diff";
import { parse, html } from "diff2html";
import { app1, app2 } from "./constants";

import "../node_modules/diff2html/bundles/css/diff2html.min.css";

document.addEventListener("DOMContentLoaded", function() {
  const diffStr = createPatch("yaml", app1, app2);
  const diffJson = parse(diffStr);
  const diffHtml = html(diffJson, { drawFileList: true });
  document.getElementById("diff").innerHTML = diffHtml;
});
