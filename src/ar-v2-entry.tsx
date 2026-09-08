import React from "react";
import { createRoot } from "react-dom/client";
import ARNavigationV2 from "./ar-v2-app";
import "./ar-v2.css";

const root = document.getElementById("ar-v2-root");

if (!root) {
  throw new Error("Missing #ar-v2-root.");
}

createRoot(root).render(
  <React.StrictMode>
    <ARNavigationV2 />
  </React.StrictMode>,
);
