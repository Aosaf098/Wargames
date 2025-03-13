import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { ThemeProvider } from "./Provider/ThemeProvider";
import HomeProvider from "./Provider/HomeProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <HomeProvider>
        <RouterProvider router={router} />
      </HomeProvider>
    </ThemeProvider>
  </StrictMode>
);
