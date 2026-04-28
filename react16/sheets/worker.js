import {
  UniverSheetsFilterPlugin
} from "../chunk-42IRN2CZ.js";
import {
  zh_CN_default
} from "../chunk-ITRQ2GGR.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-JTSNRN7X.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-Y45V7LNH.js";
import "../chunk-XJLBVLLP.js";
import {
  Univer
} from "../chunk-FYOWE623.js";
import "../chunk-EQ2B2W73.js";
import "../chunk-24OICD5T.js";

// src/sheets/worker.ts
var univer = new Univer({
  locale: "zhCN" /* ZH_CN */,
  logLevel: 4 /* VERBOSE */,
  locales: {
    ["zhCN" /* ZH_CN */]: zh_CN_default
  }
});
univer.registerPlugins([
  [UniverSheetsPlugin, { onlyRegisterFormulaRelatedMutations: true }],
  [UniverFormulaEnginePlugin],
  [UniverRPCWorkerThreadPlugin],
  [UniverRemoteSheetsFormulaPlugin],
  [UniverSheetsFilterPlugin]
]);
self.univer = univer;
