import { Box, Text, extendTheme, Button, Image } from "@chakra-ui/react";
import CartCard from "./CartCard";
import { BsPencil } from "react-icons/bs"
import { FaShippingFast } from "react-icons/fa"
import { RiCouponLine } from "react-icons/ri"
import { FiChevronRight } from "react-icons/fi"
import { total } from "./CartCard";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom"
const breackpoints = {
    base: "420px",
    sm: "550px",
    md: "700px",
    lg: "850px",
    xl: "950px",
    "2xl": "1200px"
}
const theme = extendTheme({ breackpoints })

function Cart() {

    const [cartData, setDartData] = useState([])
    useEffect(() => {
        const cartquantity = JSON.parse(localStorage.getItem("cart")) || []
        setDartData(cartquantity)
    }, [])
    const [Total, setTotal] = useState(0)
    let t = cartData.reduce((acc, el) => {
        return acc + (el.quantity * el.price)
    }, 0)
    console.log(t)

    const handleIncrement = (id) => {

        let d = cartData.filter((el) => {
            if (id == el.id) {
                el.quantity++;
                return el
            } else {
                return el
            }
        })

        localStorage.setItem("cart", JSON.stringify(d))

        setDartData(d)
    }

    const handleDicrement = (id) => {
        let d = cartData.filter((el) => {
            if (id == el.id) {
                el.quantity--;
                return el
            } else {
                return el
            }
        })

        localStorage.setItem("cart", JSON.stringify(d))
        setDartData(d)
    }

    const deleteCart = (i) => {
        cartData.splice(i, 1)
        localStorage.setItem("cart", JSON.stringify(cartData))
        const c = JSON.parse(localStorage.getItem("cart")) || []
        setDartData(c)
    }
    return (
        <Box >
            <Box>
                <Text fontFamily="SF-Heading-font" fontSize={["22px", "25px", "28px", "30px", "35px", "35px"]}>Shopping Cart</Text>
                <Text mt="20px">Home - our Shopping Cart</Text>
            </Box>
            <Box mt="30px">
                {
                    cartData.length > 0 ? cartData.map((e, i) => (
                        <CartCard key={e.id} data={e} i={i} handleDicrement={handleDicrement} handleIncrement={handleIncrement} deleteCart={deleteCart} />
                    )) : <h1>No Data in cart</h1>
                }

            </Box>
            <Box mt="40px" w={["90%", "40%", "35%", "25%", "20%", "20%"]} ml={["2px", "200px", "400px", "700px", "1000px", "1000px"]}>
                <Box display="flex" borderBottom="1px solid gray" justifyContent="space-between">
                    <Box>
                        <BsPencil size="30px" />
                        <Text>Note</Text>
                    </Box>
                    <Box >
                        <FaShippingFast size="30px" />
                        <Text>Shipping</Text>
                    </Box>
                    <Box>
                        <RiCouponLine size="30px" />
                        <Text>Coupon</Text>
                    </Box>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Box>Shipping</Box>
                    <Box>:FREE</Box>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Box>Subtotal</Box>

                    <Box fontWeight="bold">{t}</Box>

                </Box>
                <RouterLink to="/payment">
                    <Button w="100%" bg="black" color="white" display="flex" justifyContent="space-between" borderRadius="0" mt="30px">
                        <Box>
                            <Text>Place Order</Text>
                            <Text fontSize={["5px", "6px", "8px", "10px", "11px", "11px"]}>5% Extra off on UPI</Text>
                        </Box>
                        <Box>
                            <Image src="https://cdn.gokwik.co/v4/images/upi-icons.svg" />
                        </Box>
                        <Box><FiChevronRight /></Box>
                    </Button>
                </RouterLink>
            </Box>
        </Box>
    )
}
export default Cart;