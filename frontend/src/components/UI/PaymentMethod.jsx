import React from "react";
import { useSearchParams } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Helmet from "../Helmet/Helmet";
import "../../styles/pages.css";

// PayPal ngarkohet vetëm në këtë faqe (më parë ngarkohej në çdo faqe).
const initialOptions = {
  "client-id":
    "Aad3i5hxYajKSnA2dx99v3ppiUtopSQxShPt3HWv9LJTaHlWSxWLY_21-qLHlWXGBDtCRK0zMtm1DrzZ",
  currency: "EUR",
  intent: "capture",
};

// Përdorimi: /payment?amount=150  (ose <PaymentMethod rentalAmount={150} />)
const PaymentMethod = ({ rentalAmount }) => {
  const [params] = useSearchParams();
  const amount = Number(rentalAmount ?? params.get("amount")) || 0;
  const [done, setDone] = React.useState(null);

  return (
    <Helmet title="Payment">
      <section className="auth">
        <div className="auth__card">
          <h1>Payment</h1>
          {amount <= 0 ? (
            <p className="muted">There's no amount to pay. Book a car first and we'll send you the payment link.</p>
          ) : done ? (
            <p className="auth__status auth__status--ok">Payment received. Thank you, {done}!</p>
          ) : (
            <>
              <p className="muted">Amount to pay: <strong>€{amount}</strong></p>
              <PayPalScriptProvider options={initialOptions}>
                <PayPalButtons
                  createOrder={(data, actions) =>
                    actions.order.create({
                      purchase_units: [{ amount: { value: amount.toFixed(2) } }],
                    })
                  }
                  onApprove={(data, actions) =>
                    actions.order.capture().then((details) => {
                      setDone(details.payer.name.given_name);
                    })
                  }
                />
              </PayPalScriptProvider>
            </>
          )}
        </div>
      </section>
    </Helmet>
  );
};

export default PaymentMethod;
