import {
  UniverActionRecorderPlugin
} from "./chunk-SGUGL44G.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-AI35IEZI.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-CEBZDMUY.js";
import {
  UniverUniscriptPlugin
} from "./chunk-5HCYRLJA.js";
import "./chunk-GMDX6E2J.js";
import "./chunk-A3DRKKMY.js";
import "./chunk-WLDOIN2T.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-ZG6CLOT5.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-O7ZMWJ24.js";
import "./chunk-LTFMDMK3.js";
import {
  UniverDebuggerPlugin
} from "./chunk-QOJYQTQV.js";
import {
  UniverWatermarkPlugin
} from "./chunk-PS54CEWU.js";
import "./chunk-USCKJR67.js";
import "./chunk-7AH2NXGY.js";
import "./chunk-62B6ZX63.js";
import "./chunk-LGBT2HHD.js";
import "./chunk-JSH4HPRK.js";
import "./chunk-66VJQABC.js";
import "./chunk-SDBIGTWI.js";
import "./chunk-ULYJ4AEG.js";
import "./chunk-G4MAVNYM.js";
import "./chunk-KIV2V2IY.js";
import "./chunk-3VI6RKZ6.js";
import "./chunk-CLNOWGEJ.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-DO7PIA5W.js";

// src/sheets-no-worker/very-lazy.ts
var IS_E2E = false;
function getVeryLazyPlugins() {
  const plugins = [
    [UniverActionRecorderPlugin],
    [UniverSheetsHyperLinkUIPlugin],
    [UniverSheetsSortUIPlugin],
    [UniverSheetsCrosshairHighlightPlugin],
    [UniverSheetsFindReplacePlugin],
    [UniverWatermarkPlugin]
  ];
  if (!IS_E2E) {
    plugins.push([UniverDebuggerPlugin]);
    plugins.push([UniverUniscriptPlugin, {
      getWorkerUrl(_, label) {
        if (label === "json") {
          return "/vs/language/json/json.worker.js";
        }
        if (label === "css" || label === "scss" || label === "less") {
          return "/vs/language/css/css.worker.js";
        }
        if (label === "html" || label === "handlebars" || label === "razor") {
          return "/vs/language/html/html.worker.js";
        }
        if (label === "typescript" || label === "javascript") {
          return "/vs/language/typescript/ts.worker.js";
        }
        return "/vs/editor/editor.worker.js";
      }
    }]);
  }
  return plugins;
}
export {
  getVeryLazyPlugins as default
};
