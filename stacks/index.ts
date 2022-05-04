import { FrontendStack } from "./FrontendStack";
import { App } from "@serverless-stack/resources";

export default function (app: App) {
  app.setDefaultFunctionProps({
    runtime: "nodejs14.x",
    srcPath: "backend",
    bundle: {
      format: "esm",
    },
  });
  app.stack(FrontendStack);
}
