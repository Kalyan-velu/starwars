import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store.tsx";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </Provider>
    </BrowserRouter>
    ,
  </React.StrictMode>
);
