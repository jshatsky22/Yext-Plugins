export interface EntityWebhookPayload {
  meta?: {
    eventType: string;
  };
  entityId: string;
  primaryProfile: {
    meta: {
      entityType: string;
    };
  };
}
