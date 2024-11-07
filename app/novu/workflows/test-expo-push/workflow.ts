import { workflow } from "@novu/framework";
import { zodPayloadSchema, zodPushControlSchema } from "./schemas";

export const slackVerificationOTP = workflow(
  "slack-verify-otp",
  async ({ step, payload }) => {
    // -----------------------------------push flow-------------------------------------------------------------------------
    await step.push(
      "send-push",
      async (controls) => {
        return {
          subject: controls.pushNotificationSubject,
          body: `Your verification code from Slack is ${payload.validationCode}`,
        };
      },
      {
        controlSchema: zodPushControlSchema,
      }
    );
  },
  {
    payloadSchema: zodPayloadSchema,
  }
);
