import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-KG5FA3B3.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-WVFMLTBF.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-S4W76XLZ.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-YU5SBAEL.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-DTKR6OBW.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-UESDEO6P.js";
import "./chunk-VYRRRSJG.js";
import "./chunk-VZAWI4Z7.js";
import "./chunk-LTFMDMK3.js";
import "./chunk-ZIIAXTTK.js";
import "./chunk-HETNQE73.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-USCKJR67.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-7AH2NXGY.js";
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

// src/sheets-no-worker/lazy.ts
function getLazyPlugins() {
  return [
    [UniverDocsMentionUIPlugin],
    [UniverSheetsNumfmtUIPlugin],
    [UniverThreadCommentUIPlugin],
    [UniverSheetsThreadCommentUIPlugin],
    [UniverSheetsNoteUIPlugin],
    [UniverSheetsTableUIPlugin],
    [UniverSheetsFormulaUIPlugin],
    [UniverSheetsDataValidationUIPlugin],
    [UniverSheetsConditionalFormattingUIPlugin],
    [UniverSheetsFilterUIPlugin, { useRemoteFilterValuesGenerator: false }],
    [UniverSheetsDrawingUIPlugin]
  ];
}
export {
  getLazyPlugins as default
};
