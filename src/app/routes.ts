import { createBrowserRouter } from "react-router";
import { Landing } from "./pages/Landing";

const basename = import.meta.env.BASE_URL;

// Landing loads eagerly (it's the entry); everything else is code-split so
// the first paint isn't paying for form wizards and pricing pages.
export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Landing,
    },
    {
      path: "/get-started",
      lazy: async () => ({
        Component: (await import("./pages/GetStarted")).GetStarted,
      }),
    },
    {
      path: "/plans",
      lazy: async () => ({
        Component: (await import("./pages/Plans")).Plans,
      }),
    },
    {
      path: "/thank-you",
      lazy: async () => ({
        Component: (await import("./pages/ThankYou")).ThankYou,
      }),
    },
    {
      path: "/fb",
      lazy: async () => ({
        Component: (await import("./pages/FBLead")).FBLead,
      }),
    },
  ],
  { basename },
);
