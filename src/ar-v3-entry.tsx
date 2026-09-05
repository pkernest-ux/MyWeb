import React from "react";
import { createRoot } from "react-dom/client";
import ARNavigationV3 from "./ar-v3-app";
import "./ar-v3.css";

const root = document.getElementById("ar-v3-root");

if (!root) {
  throw new Error("Missing #ar-v3-root.");
}

createRoot(root).render(
  <React.StrictMode>
    <ARNavigationV3 />
  </React.StrictMode>,
);
