import {
  UniverUniscriptPlugin
} from "../chunk-5HCYRLJA.js";
import "../chunk-GMDX6E2J.js";
import "../chunk-A3DRKKMY.js";
import "../chunk-WLDOIN2T.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-62B6ZX63.js";
import {
  DEFAULT_DOCUMENT_DATA_CN
} from "../chunk-LGBT2HHD.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-JSH4HPRK.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-66VJQABC.js";
import "../chunk-SDBIGTWI.js";
import {
  zh_CN_default
} from "../chunk-HCOYW2IF.js";
import "../chunk-N6FCNQNY.js";
import "../chunk-BCDUZYIJ.js";
import "../chunk-G4MAVNYM.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-KIV2V2IY.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-3VI6RKZ6.js";
import {
  Univer
} from "../chunk-CLNOWGEJ.js";
import "../chunk-EQ2B2W73.js";
import "../chunk-DO7PIA5W.js";

// src/docs-uniscript/main.ts
var univer = new Univer({
  locale: "zhCN" /* ZH_CN */,
  locales: {
    ["zhCN" /* ZH_CN */]: zh_CN_default
  },
  logLevel: 4 /* VERBOSE */
});
univer.registerPlugin(UniverRenderEnginePlugin);
univer.registerPlugin(UniverFormulaEnginePlugin);
univer.registerPlugin(UniverUIPlugin, {
  container: "app",
  ribbonType: "classic",
  footer: false
});
univer.registerPlugin(UniverDocsPlugin);
univer.registerPlugin(UniverDocsUIPlugin);
univer.registerPlugin(UniverSheetsPlugin);
univer.registerPlugin(UniverSheetsUIPlugin);
univer.registerPlugin(UniverUniscriptPlugin, {
  getWorkerUrl(moduleID, label) {
    if (label === "typescript" || label === "javascript") {
      return "/vs/language/typescript/ts.worker.js";
    }
    return "/vs/editor/editor.worker.js";
  }
});
univer.createUnit(1 /* UNIVER_DOC */, DEFAULT_DOCUMENT_DATA_CN);
window.univer = univer;
