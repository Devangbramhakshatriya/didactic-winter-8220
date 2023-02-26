import React, { useState } from 'react'
import '../payment.css';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';


const PaymentPage = () => {
  const navigate=useNavigate()
    const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()

  const [value, setValue] = React.useState({
    number:"",
    month:"",
    year:"",
    cvv:"",
    name:""
  })
  const handleChange = (event) =>{
    // setValue(event.target.value0)
    setValue(event.target.value)
    // setValue1(event.target.value1)
    // setValue2(event.target.value2)
    // setValue3(event.target.value3)
  } 
  const handleSubmit = (e) => {
    e.preventDefault();
    setValue({ number:"",
    month:"",
    year:"",
    cvv:"",
    name:""})
    //  if(value.number.length>0 || value.month.length>0 || value.year.length>0 || value.cvv.length>0 || value.name.length>0 ){
       onOpen()
    //  }
  };
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
          <div id="creditcart" onclick="creditcart()" style={{marginTop:"40px"}} >
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
                <input type="number" placeholder="XXXX XXXX XXXX XXXX" value={value.number}
            onChange={handleChange} />
              </div>
              <div>
                <p>Expiry Month</p>
                <input type="number" placeholder="XX" value={value.month}
            onChange={handleChange} />
              </div>
              <div>
                <p>Expiry Year</p>
                <input type="number" placeholder="XXXX" value={value.year}
            onChange={handleChange}/>
              </div>
              <div>
              <p>CVV</p>
              <input type="number" placeholder="XXX" value={value.cvv}
            onChange={handleChange}/>
            </div>
              <div>
                <input type="text" placeholder="Name on Card" value={value.name}
            onChange={handleChange}/>
              </div>
              <div>
                {/* <a href=""><button>PAY NOW</button></a> */}
    <>
      <Button colorScheme='blackAlpha' size='lg'variant='solid' onClick={handleSubmit}>
      PAY NOW
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <Alert
  status='success'
  variant='subtle'
  flexDirection='column'
  alignItems='center'
  justifyContent='center'
  textAlign='center'
  height='200px'
>
  <AlertIcon boxSize='40px' mr={0} />
  <AlertTitle mt={4} mb={1} fontSize='lg'>
    Order Placed Successffully!
  </AlertTitle>
  <AlertDescription maxWidth='sm'>
    Thanks for giving your order. Our team will get back to you soon.
  </AlertDescription>
</Alert>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>



              </div>
            </div>
          </div>
          <div id="debitcart" onclick="debitcart()"  style={{marginTop:"20px"}}>
            {/* <span class="material-icons iconssize"> payments </span> */}
            <p class="texticons">DEBIT CARD</p>
          </div>
          <div style={{marginTop:"10px"}}>
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