import {
  createUniver
} from "../chunk-6LUB3MOM.js";
import "../chunk-SDBIGTWI.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-G4MAVNYM.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-KIV2V2IY.js";
import "../chunk-3VI6RKZ6.js";
import "../chunk-CLNOWGEJ.js";
import "../chunk-EQ2B2W73.js";
import "../chunk-DO7PIA5W.js";

// ../presets/packages/preset-sheets-core/src/worker.ts
function UniverSheetsCoreWorkerPreset(config = {}) {
  const {
    formula
  } = config;
  return {
    plugins: [
      [UniverSheetsPlugin, { onlyRegisterFormulaRelatedMutations: true }],
      [UniverFormulaEnginePlugin, { function: formula == null ? void 0 : formula.function }],
      UniverRPCWorkerThreadPlugin,
      UniverRemoteSheetsFormulaPlugin
    ]
  };
}

// src/preset-sheets-core/worker.ts
createUniver({
  presets: [
    UniverSheetsCoreWorkerPreset()
  ]
});
