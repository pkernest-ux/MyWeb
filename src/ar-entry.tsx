import React from "react";
import { createRoot } from "react-dom/client";
import ARManagerApp from "../ar";
import "./ar.css";

const rootElement = document.getElementById("ar-root");

if (!rootElement) {
  throw new Error("Missing #ar-root element.");
}

const searchParams = new URLSearchParams(window.location.search);
const isAdminArPage = window.location.pathname.endsWith("/admin-ar.html");
const isEmbeddedAdmin = rootElement.dataset.embedded === "true" || searchParams.get("embedded") === "1";
const isAdminMode = isAdminArPage || isEmbeddedAdmin;

createRoot(rootElement).render(
  <React.StrictMode>
    <ARManagerApp
      embedded={isEmbeddedAdmin}
      initialTab={isAdminMode ? rootElement.dataset.initialTab || searchParams.get("tab") || "map" : "frontend"}
      publicOnly={!isAdminMode}
    />
  </React.StrictMode>
);
