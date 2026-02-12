import { createBrowserRouter } from "react-router";
import { Landing } from "./pages/Landing";
import { GetStarted } from "./pages/GetStarted";
import { Plans } from "./pages/Plans";
import { ThankYou } from "./pages/ThankYou";
import { FBLead } from "./pages/FBLead";

const basename = import.meta.env.BASE_URL;

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Landing,
    },
    {
      path: "/get-started",
      Component: GetStarted,
    },
    {
      path: "/plans",
      Component: Plans,
    },
    {
      path: "/thank-you",
      Component: ThankYou,
    },
    {
      path: "/fb",
      Component: FBLead,
    },
  ],
  { basename },
);
