import React from "react";
import MainPage from "./mainPage/MainPage";
import Banner from "./Banner/Banner";
import { HashRouter, Route } from "react-router-dom";
import Booking from "./Booking/Booking";

export default function App() {
  return (
    <>
    <React.StrictMode>
      <Banner /> 
      <HashRouter>
        <Route path="/" element={<MainPage />}>
          <Route path=":id" element={<Booking />} />
        </Route>
      </HashRouter>
      </React.StrictMode>
    </>
  );
}
