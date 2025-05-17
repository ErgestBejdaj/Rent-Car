import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import masterCard from "../../assets/all-images/master-card.jpg";
import paypal from "../../assets/all-images/paypal.jpg";
import "../../styles/payment-method.css";

const PaymentMethod = ({ rentalAmount }) => {
  return (
    <>
      

      <div className="mt-3">
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: rentalAmount.toString(),
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
              alert("Transaction completed by " + details.payer.name.given_name);
              // Këtu mund të shtoni kod për të ruajtur detajet e pagesës në bazën tuaj të të dhënave
            });
          }}
        />
      </div>
    </>
  );
};

export default PaymentMethod;
