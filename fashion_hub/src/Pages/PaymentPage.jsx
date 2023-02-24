import React from 'react'
import '../payment.css';

const PaymentPage = () => {
  return (
    <div>
        <div id="maincontainer">
      <div>
        <div onclick="homepage()">
          <img src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/koovs_final_logo.svg?v=1667889730" width="8%" style={{marginLeft:"20px"}} />
        </div>
      </div>
      <div>
        <img src="https://i.imgur.com/WVzlJRk.jpeg" />
      </div>
      <div>
        <h3 id="select">SELECT PAYMENT OPTION</h3>
      </div>
      <div>
        <div id="paymentdetails">
          <div id="creditcart" onclick="creditcart()">
            {/* <span class="material-icons iconssize"> credit_card </span> */}
            <p class="texticons">CREDIT CARD</p>
          </div>
          <div>
            <div class="detailsstr">
              <div>
                <h3 id="cardname">CREDIT CARD</h3>
              </div>
              <div>
                <p>Card Number</p>
                <input type="number" placeholder="XXXX XXXX XXXX XXXX" />
              </div>
              <div>
                <p>Expiry Month</p>
                <input type="number" placeholder="XX" />
              </div>
              <div>
                <p>Expiry Year</p>
                <input type="number" placeholder="XXXX" />
              </div>
              <div>
              <p>CVV</p>
              <input type="number" placeholder="XXX" />
            </div>
              <div>
                <input type="text" placeholder="Name on Card" />
              </div>
              <div>
                <a href=""><button>PAY NOW</button></a>
              </div>
            </div>
          </div>
          <div id="debitcart" onclick="debitcart()">
            {/* <span class="material-icons iconssize"> payments </span> */}
            <p class="texticons">DEBIT CARD</p>
          </div>
          <div>
            {/* <span class="material-icons iconssize"> toll </span> */}

            <p class="texticons">NET BANKING</p>
          </div>
          <div>
            {/* <span class="material-icons iconssize">
              account_balance_wallet
            </span> */}
            <p class="texticons">WALLET/UPI</p>
          </div>
          <div>
            {/* <span class="material-icons iconssize"> euro_symbol </span> */}
            <p class="texticons">CASH ON DELIVERY</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default PaymentPage