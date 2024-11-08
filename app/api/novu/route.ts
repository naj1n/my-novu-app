import { serve } from "@novu/framework/next";
import {
  welcomeOnboardingEmail,
  slackVerificationOTP,
} from "../../novu/workflows";

// the workflows collection can hold as many workflow definitions as you need
export const { GET, POST, OPTIONS } = serve({
  workflows: [welcomeOnboardingEmail, slackVerificationOTP],
});
