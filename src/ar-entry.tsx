import React from "react";
import { createRoot } from "react-dom/client";
import ARManagerApp from "../ar";
import "./ar.css";

const rootElement = document.getElementById("ar-root");

if (!rootElement) {
  throw new Error("Missing #ar-root element.");
}

createRoot(rootElement).render(
  <React.StrictMode>
    <ARManagerApp />
  </React.StrictMode>
);
