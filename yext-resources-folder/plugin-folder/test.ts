import { processWebhookAndApplyTemplate } from "./mod.ts";
import sampleWebhook from "./../../Testing/sampleWebhook.json" assert {
  type: "json",
};

declare global {
  var api_key: string;
  var entityType: string;
  var templateId: string;
}

globalThis.api_key = "3f92c8b7ac9519a616eb50683097cbe8";
globalThis.entityType = "product";
globalThis.templateId = "pluginDemoTemplate";

Deno.test("Test Applying Template", async () => {
  const run = await processWebhookAndApplyTemplate(sampleWebhook);
  return run;
});
