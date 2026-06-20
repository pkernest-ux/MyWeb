import React from "react";
import { createRoot } from "react-dom/client";
import ARManagerApp from "../ar";
import "./ar.css";

const rootElement = document.getElementById("ar-root");

if (!rootElement) {
  throw new Error("Missing #ar-root element.");
}

const searchParams = new URLSearchParams(window.location.search);

createRoot(rootElement).render(
  <React.StrictMode>
    <ARManagerApp
      embedded={rootElement.dataset.embedded === "true" || searchParams.get("embedded") === "1"}
      initialTab={rootElement.dataset.initialTab || searchParams.get("tab") || "map"}
    />
  </React.StrictMode>
);
