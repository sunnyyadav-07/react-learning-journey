import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { NewsContextProvider } from "./context/NewsContext.jsx";
import "react-loading-skeleton/dist/skeleton.css";

createRoot(document.getElementById("root")).render(
    <NewsContextProvider>
      <App />
    </NewsContextProvider>
);
