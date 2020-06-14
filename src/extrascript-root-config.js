import { registerApplication, start } from "single-spa";
import { isUserSignedIn } from "@extrascript/components";
import * as isActive from "./activity-functions";

// const authToken = "d83jD63UdZ6RS6f70D0";
const authToken = "";

registerApplication({
  name: "@extrascript/navigation",
  app: () => System.import("@extrascript/navigation"),
  activeWhen: isActive.navbar,
  // TODO: make common custom props
  customProps: {
    authToken,
  },
});

start({
  urlRerouteOnly: true,
});

if (isUserSignedIn()) {
  registerApplication({
    name: "@extrascript/leaves-web",
    app: () => System.import("@extrascript/leaves-web"),
    activeWhen: "/leaves",
    customProps: {
      domElementGetter: () => document.getElementById("content"),
    },
  });

  registerApplication({
    name: "@extrascript/org-chart-web",
    app: () => System.import("@extrascript/org-chart-web"),
    activeWhen: "/org-chart",
    customProps: {
      domElementGetter: () => document.getElementById("content"),
    },
  });

  registerApplication({
    name: "@extrascript/employees-web",
    app: () => System.import("@extrascript/employees-web"),
    activeWhen: ["/employees", "/profile"],
    customProps: {
      domElementGetter: () => document.getElementById("content"),
    },
  });

  registerApplication({
    name: "@extrascript/search-web",
    app: () => System.import("@extrascript/search-web"),
    // TODO: by some reason "activeWhen: '/search'" doesn't for '/search?q=asdf'
    activeWhen: (location) => location.pathname === "/search",
    customProps: {
      domElementGetter: () => document.getElementById("content"),
    },
  });

  registerApplication({
    name: "@extrascript/calendar",
    app: () => System.import("@extrascript/calendar"),
    activeWhen: "/calendar",
    customProps: {
      domElementGetter: () => document.getElementById("content"),
    },
  });

  registerApplication({
    name: "@extrascript/dashboard-web",
    app: () => System.import("@extrascript/dashboard-web"),
    activeWhen: (location) => location.pathname === "/",
    customProps: {
      domElementGetter: () => document.getElementById("content"),
    },
  });
} else {
  registerApplication({
    name: "@extrascript/auth",
    app: () => System.import("@extrascript/auth"),
    activeWhen: "/",
    customProps: {
      domElementGetter: () => document.getElementById("content"),
    },
  });
}
