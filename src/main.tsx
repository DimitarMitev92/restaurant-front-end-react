import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { GlobalReset } from "./styles/GlobalCssReset.ts";
import { QueryClientProvider, QueryClient } from "react-query";
import { queryFetch } from "./services/queryFetch.ts";

import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: queryFetch,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalReset />
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
