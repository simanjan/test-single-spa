import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication({
  name: "@extrascript/navigation",
  app: () => System.import("@extrascript/navigation"),
  activeWhen: isActive.navbar,
});

start({
  urlRerouteOnly: true,
});
