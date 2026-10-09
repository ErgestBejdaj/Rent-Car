// Makinat e faqes vijnë nga assets/data/carData.js.
// (Faqet i lexojnë me useCars(), që më vonë të jetë e lehtë t'i marrim nga një panel admini.)
import React, { createContext, useContext } from "react";
import staticCars from "../assets/data/carData";

const value = { cars: staticCars, loading: false, source: "static", reload: () => {} };
const CarsContext = createContext(value);

export const CarsProvider = ({ children }) => (
  <CarsContext.Provider value={value}>{children}</CarsContext.Provider>
);

export const useCars = () => useContext(CarsContext);
