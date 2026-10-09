// src/components/Layout/Layout.js

import React, { Fragment } from 'react';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";

const initialOptions = {
  "client-id": "Aad3i5hxYajKSnA2dx99v3ppiUtopSQxShPt3HWv9LJTaHlWSxWLY_21-qLHlWXGBDtCRK0zMtm1DrzZ", // Zëvendësoni me Client ID tuaj nga PayPal
  currency: "USD",
  intent: "capture",
};

const Layout = () => {
  return (
    <PayPalScriptProvider options={initialOptions}>
      <Fragment>
        <Header />
        <div>
          <Routers />
        </div>
        <Footer />
      </Fragment>
    </PayPalScriptProvider>
  );
};

export default Layout;
