import {
  UniverUniscriptPlugin
} from "../chunk-HGZE2G36.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-ESUTMQMI.js";
import "../chunk-FBFABEQN.js";
import "../chunk-Q2HZ6DDG.js";
import "../chunk-MBWDTCKE.js";
import "../chunk-DQJ4ICFF.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-WJA2EZZE.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-FFADTKHL.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-ZGAQS7CU.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
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
import {
  UniverSheetsFormulaPlugin
} from "../chunk-JTSNRN7X.js";
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

// src/sheets-uniscript/main.ts
var IS_E2E = false;
var univer = new Univer({
  locale: "zhCN" /* ZH_CN */,
  locales: {
    ["zhCN" /* ZH_CN */]: zh_CN_default
  },
  logLevel: 4 /* VERBOSE */
});
univer.registerPlugin(UniverRenderEnginePlugin);
univer.registerPlugin(UniverUIPlugin, {
  container: "app",
  ribbonType: "classic"
});
univer.registerPlugin(UniverDocsPlugin);
univer.registerPlugin(UniverDocsUIPlugin);
univer.registerPlugin(UniverSheetsPlugin);
univer.registerPlugin(UniverSheetsUIPlugin);
univer.registerPlugin(UniverSheetsNumfmtPlugin);
univer.registerPlugin(UniverSheetsNumfmtUIPlugin);
univer.registerPlugin(UniverFormulaEnginePlugin);
univer.registerPlugin(UniverSheetsFormulaPlugin);
univer.registerPlugin(UniverUniscriptPlugin, {
  getWorkerUrl(_, label) {
    if (label === "typescript" || label === "javascript") {
      return "/vs/language/typescript/ts.worker.js";
    }
    return "/vs/editor/editor.worker.js";
  }
});
if (IS_E2E) {
  univer.registerPlugin(UniverDebuggerPlugin, {
    fab: false,
    performanceMonitor: {
      enabled: false
    }
  });
}
univer.createUnit(2 /* UNIVER_SHEET */, UNISCRIT_WORKBOOK_DATA_DEMO);
window.univer = univer;
