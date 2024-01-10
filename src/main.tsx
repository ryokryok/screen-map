import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "@vis.gl/react-google-maps/examples.css";

createRoot(document.getElementById("app")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
