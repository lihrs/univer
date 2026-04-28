import {
  UniverUniscriptPlugin
} from "../chunk-HGZE2G36.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import "../chunk-DQJ4ICFF.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-ZGAQS7CU.js";
import {
  DEFAULT_DOCUMENT_DATA_CN
} from "../chunk-ZDLDEJRU.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-YSE4D6PG.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-I2OYHXFH.js";
import {
  zh_CN_default
} from "../chunk-ITRQ2GGR.js";
import "../chunk-JTSNRN7X.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-Y45V7LNH.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-XJLBVLLP.js";
import {
  Univer
} from "../chunk-FYOWE623.js";
import "../chunk-EQ2B2W73.js";
import "../chunk-24OICD5T.js";

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
