import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
  cache: new InMemoryCache(),
});

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error('No se encontró el elemento raíz con ID "root"');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
