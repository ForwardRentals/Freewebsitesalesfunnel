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
      path: "/domains",
      lazy: async () => ({
        Component: (await import("./pages/Domains")).Domains,
      }),
    },
    {
      path: "/custom",
      lazy: async () => ({
        Component: (await import("./pages/CustomBuilds")).CustomBuilds,
      }),
    },
    {
      path: "/crm",
      lazy: async () => ({
        Component: (await import("./pages/CrmSales")).CrmSales,
      }),
    },
    {
      path: "/crm-setup",
      lazy: async () => ({
        Component: (await import("./pages/CrmSetup")).CrmSetup,
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

// Scroll to top whenever the user navigates to a new page (not on back/forward,
// where the browser restores position, and not for #hash links).
if (typeof window !== "undefined") {
  let lastPath = window.location.pathname;
  router.subscribe((state) => {
    if (state.navigation.state !== "idle") return;
    const { pathname, hash } = state.location;
    if (pathname === lastPath) return;
    lastPath = pathname;
    if (hash || state.historyAction === "POP") return;
    window.scrollTo(0, 0);
  });
}
