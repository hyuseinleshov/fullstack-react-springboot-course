import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51RdpQKDEJkquwNe8AgKKpNBVDWpNF2zUUUEcebJcaFjNcpNmP9EQf250ATDKMdFmV68UmoXXh11SG92ocJ8WOtor00zAldihpT"
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </BrowserRouter>
  </StrictMode>
);
