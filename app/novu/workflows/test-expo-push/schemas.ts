import { z } from "zod";

export const zodPushControlSchema = z.object({
  pushNotificationSubject: z.string().default("You received a Slack OTP"),
});

export const zodPayloadSchema = z.object({
  validationCode: z.number().int().default(123456),
  magicLinkURL: z.string().url().default("https://slack.com/magic/link"),
});
