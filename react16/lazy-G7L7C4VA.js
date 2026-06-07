import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-WVFMLTBF.js";
import "./chunk-ZIIAXTTK.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-USCKJR67.js";
import "./chunk-7AH2NXGY.js";
import "./chunk-436BBS67.js";
import "./chunk-62B6ZX63.js";
import "./chunk-JSH4HPRK.js";
import "./chunk-66VJQABC.js";
import "./chunk-ULYJ4AEG.js";
import "./chunk-G4MAVNYM.js";
import "./chunk-KIV2V2IY.js";
import "./chunk-3VI6RKZ6.js";
import "./chunk-CLNOWGEJ.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-DO7PIA5W.js";

// src/sheets-multi-units/lazy.ts
function getLazyPlugins() {
  return [
    [UniverSheetsDataValidationUIPlugin],
    [UniverSheetsConditionalFormattingUIPlugin],
    [UniverSheetsFilterUIPlugin, { useRemoteFilterValuesGenerator: false }],
    [UniverSheetsDrawingUIPlugin]
  ];
}
export {
  getLazyPlugins as default
};
