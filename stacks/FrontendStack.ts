import { StackContext, StaticSite } from "@serverless-stack/resources";

export function FrontendStack({ stack }: StackContext) {
  const site = new StaticSite(stack, "site", {
    path: "frontend",
    customDomain: "v1conf.sst.dev",
  });

  stack.addOutputs({
    URL: site.customDomainUrl!,
  })
}
