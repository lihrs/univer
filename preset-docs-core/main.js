import {
  createUniver
} from "../chunk-6LUB3MOM.js";
import "../chunk-65H6OSLA.js";
import {
  UniverNetworkPlugin
} from "../chunk-63KGSGG2.js";
import "../chunk-Y4KEHQSQ.js";
import {
  DEFAULT_DOCUMENT_DATA_SIMPLE
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
  zh_CN_default,
  zh_CN_default2,
  zh_CN_default3
} from "../chunk-BCDUZYIJ.js";
import "../chunk-G4MAVNYM.js";
import {
  UniverFormulaEnginePlugin
} from "../chunk-KIV2V2IY.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-3VI6RKZ6.js";
import {
  mergeLocales
} from "../chunk-CLNOWGEJ.js";
import "../chunk-EQ2B2W73.js";
import "../chunk-DO7PIA5W.js";

// ../presets/packages/preset-docs-core/src/umd.ts
function UniverDocsCorePreset(config = {}) {
  const {
    container = "app",
    header,
    footer,
    toolbar,
    ribbonType,
    menu,
    contextMenu,
    disableAutoFocus
  } = config;
  return {
    plugins: [
      UniverNetworkPlugin,
      UniverDocsPlugin,
      UniverRenderEnginePlugin,
      [UniverUIPlugin, {
        container,
        header,
        footer,
        toolbar,
        ribbonType,
        menu,
        contextMenu,
        disableAutoFocus
      }],
      UniverDocsUIPlugin,
      UniverFormulaEnginePlugin
    ]
  };
}

// ../presets/packages/preset-docs-core/src/locales/zh-CN.ts
var zh_CN_default4 = mergeLocales(
  zh_CN_default,
  zh_CN_default2,
  zh_CN_default3
);

// src/preset-docs-core/main.ts
var { univer, univerAPI } = createUniver({
  locale: "zhCN" /* ZH_CN */,
  locales: {
    ["zhCN" /* ZH_CN */]: mergeLocales(zh_CN_default4)
  },
  logLevel: 4 /* VERBOSE */,
  presets: [
    UniverDocsCorePreset({
      container: "app"
    })
  ]
});
univer.createUnit(1 /* UNIVER_DOC */, DEFAULT_DOCUMENT_DATA_SIMPLE);
window.univer = univer;
window.univerAPI = univerAPI;
