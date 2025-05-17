import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import {sentryReactRouter, type SentryReactRouterBuildOptions} from "@sentry/react-router";


const sentryConfig: SentryReactRouterBuildOptions = {
  org: "frank-pn",
  project: "jsm_tourvisto",
  // An auth token is required for uploading source maps.
  authToken: "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"
  // ...
};

export default defineConfig(config => {
  return {
    plugins: [tailwindcss(), tsconfigPaths(), reactRouter(), sentryReactRouter(sentryConfig, config)],
    sentryConfig,
    ssr: {
      noExternal: [/@syncfusion/]
    }
  };
});
