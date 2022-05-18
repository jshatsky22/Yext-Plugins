import { EntityWebhookPayload } from "./types.ts";
import {applyTemplate} from "./utils.ts";

declare const entityType: string;
declare const templateId: string;

/*
Expects to be invoked by a Yext Entities API Webhook
Processes webhook, determines that event is ENTITY_CREATED, checks if entity type is desired type
Then calls out to helper function to make Entity: Update API request to apply template
*/

export async function processWebhookAndApplyTemplate(payload: EntityWebhookPayload) {
  const webhookEntityId = payload.entityId;
  const webhookEntityType = payload.primaryProfile.meta.entityType;
  // console.log("This webhook is for Entity:", entityId);
  if (payload.meta?.eventType == "ENTITY_CREATED" && entityType == webhookEntityType) {
    // console.log("Created Entity:", entityId, "Entity Type:", entityType);
    const applyTemplateRun = await applyTemplate(webhookEntityId, templateId);
    return applyTemplateRun;
  }
}
