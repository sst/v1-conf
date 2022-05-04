import { StackContext, StaticSite } from "@serverless-stack/resources";

export function MyStack({ stack }: StackContext) {
  new StaticSite(stack, "site", {
  });
}
