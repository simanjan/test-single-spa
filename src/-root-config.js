import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication({
  name: "@/navbar",
  app: () => System.import("@/navbar"),
  activeWhen: isActive.navbar,
});

start({
  urlRerouteOnly: true,
});
