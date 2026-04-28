import {
  UniverActionRecorderPlugin
} from "./chunk-ITWGRTB6.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-H7VJGYTU.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-7HIGT24S.js";
import {
  UniverUniscriptPlugin
} from "./chunk-HGZE2G36.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-KUWV6S3T.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-IFKIVI26.js";
import "./chunk-OKTSBE2K.js";
import {
  UniverDebuggerPlugin
} from "./chunk-ESUTMQMI.js";
import "./chunk-FBFABEQN.js";
import {
  UniverWatermarkPlugin
} from "./chunk-Q2HZ6DDG.js";
import "./chunk-MBWDTCKE.js";
import "./chunk-DQJ4ICFF.js";
import "./chunk-42IRN2CZ.js";
import "./chunk-TG2LLSUD.js";
import "./chunk-ZGAQS7CU.js";
import "./chunk-ZDLDEJRU.js";
import "./chunk-YSE4D6PG.js";
import "./chunk-I2OYHXFH.js";
import "./chunk-JTSNRN7X.js";
import "./chunk-Y45V7LNH.js";
import "./chunk-XJLBVLLP.js";
import "./chunk-FYOWE623.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-24OICD5T.js";

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
