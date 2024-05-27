import "./PaymentNew.css";
import background from "../../assets/admin/payment/background.png"
import vector from "../../assets/admin/payment/vector.png"
import days from "../../assets/admin/payment/45days.png"
import topSlot from "../../assets/admin/payment/topSlot.png"
import privacy from "../../assets/admin/payment/privacy.png"
import relationship from "../../assets/admin/payment/relationship.png"
import personal from "../../assets/admin/payment/personal.png"
import gold from "../../assets/admin/payment/gold.png"
import silver from "../../assets/admin/payment/silver.png"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const PaymentNew = () => {
  const navigate = useNavigate();
  const [gold_amount, setGold_amount] = useState(0);

  const handleGoldClick = (price) => {
    setGold_amount(price);
    
    if (!window.Razorpay) {
      return;
    }

    const options = {
      key: "rzp_test_afA1UpXOWaKZPn",
      amount: price * 100, 
      name: "Payments",
      description: "Donate yourself some time",
      handler: (response) => {
        const paymentId = response.razorpay_payment_id;
        const url =
          "http://localhost:3000/api/v1/rzp_capture/" +
          paymentId +
          "/" +
          price; 

        fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            navigate("/paymentSuccess");
          })
          .catch((error) => {
            navigate("/paymenterror");
          });
      },
      prefill: {
        name: "Bharada Divyesh",
        email: "divyeshtechrabbit@gmail.com",
      },
      notes: {
        address: "Ahmedabad, India",
      },
      theme: {
        color: "#9D50BB",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
    rzp1.on('payment.failed', function (response){
      rzp1.close();
      navigate("/paymentFail");
    });
  };

  return (
   <>
   </>
  );
};

export default PaymentNew;
