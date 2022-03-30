import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Home } from "./pages/Home";
import reportWebVitals from "./reportWebVitals";
import { client } from "./graphql";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contact } from "./pages/Contact";
import { AddContact } from "./pages/AddContact";
import { EditContact } from "./pages/EditContact";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact/:id" element={<Contact />} />
          <Route path="/contact/add" element={<AddContact />} />
          <Route path="/contact/:id/edit" element={<EditContact />} />
        </Routes>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
