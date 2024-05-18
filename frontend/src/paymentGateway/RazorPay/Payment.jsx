import { Component } from "react";

import "./Razorpay.css";

class Payment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      payment_amount: 0,
      refund_id: 0,
    };

    this.paymentHandler = this.paymentHandler.bind(this);
    this.refundHandler = this.refundHandler.bind(this);
  }

  componentDidMount() {
    if (!window.Razorpay) {
      console.error("Razorpay script not loaded");
    }
  }

  paymentHandler(e) {
    e.preventDefault();

    if (!window.Razorpay) {
      console.error("Razorpay script not loaded");
      return;
    }

    const { payment_amount } = this.state;
    const self = this;

    const options = {
      key: "rzp_test_afA1UpXOWaKZPn",
      amount: payment_amount * 100,
      name: "Payments",
      description: "Donate yourself some time",
      handler(response) {
        const paymentId = response.razorpay_payment_id;
        const url =
          "http://localhost:3000/api/v1/rzp_capture/" +
          paymentId +
          "/" +
          payment_amount;

        fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            console.log("Request succeeded with JSON response", data);
            self.setState({ refund_id: response.razorpay_payment_id });
          })
          .catch((error) => {
            console.error("Request failed", error);
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
  }

  refundHandler(e) {
    e.preventDefault();
    const { refund_id } = this.state;

    const url =
      "http://localhost:3000/api/v1/rzp_refunds/" +
      refund_id;

    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log("Request succeeded with JSON response", data);
        alert("Refund Succeeded");
      })
      .catch((error) => {
        console.error("Request failed", error);
      });
  }

  render() {
    const { payment_amount, refund_id } = this.state;
    return (
      <div className="wrapper-payment-Razorpay">
        <div className="payments-payment-Razorpay">
          <div className="payments-title-payment-Razorpay">
            <h1>Test Payments</h1>
          </div>
          <div className="payments-form-payment-Razorpay">
            <form onSubmit={this.paymentHandler}>
              <p>
                <label htmlFor="pay_amount">Amount to be Paid</label>
              </p>
              <input
                type="number"
                value={payment_amount}
                placeholder="Amount in INR"
                onChange={(e) =>
                  this.setState({ payment_amount: e.target.value })
                }
              />
              <p>
                <button type="submit">Pay Now</button>
              </p>
            </form>
          </div>
        </div>

        <div className="refunds-payment-Razorpay">
          <div className="refunds-title-payment-Razorpay">
            <h1>Test Refunds</h1>
          </div>
          <div className="refunds-form-payment-Razorpay">
            <form onSubmit={this.refundHandler}>
              <p>
                <label htmlFor="refund_amount">Payment Transaction ID</label>
              </p>
              <input
                type="text"
                value={refund_id}
                onChange={(e) => this.setState({ refund_id: e.target.value })}
              />
              <p>
                <button type="submit">Refund Now</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Payment;
