import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useState } from "react";

function CartCard(){
    const [count,setCount]=useState(1)
    const handleCount=(val)=>{
        setCount(count+val)
    }
    return(
        <Box display={["","flex","flex","flex","flex","flex"]} w="95%" m="auto" justifyContent="space-between" borderTop="1px solid gray" borderBottom="1px solid gray" fontFamily="sans-serif" alignContent="center" alignItems="center">
                <Box w={["50%","30%","30%","35%","35%","40%"]}  m="auto">
                    <Text fontWeight="bold">Product</Text>
                    <Box display="flex" gap="10px">
                        <Box w={["90%","60%","50%","25%","20%","20%"]}>
                            <Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/products/Flying_1_011c3e91-14bb-46c2-ab89-4df8f5f36041.png?v=1677044552&"/>
                        </Box>
                        <Box m="auto">
                            <Text>Heading</Text>
                            <Text>Description</Text>
                            <Button>Remove</Button>
                        </Box>
                    </Box>
                </Box>

                <Box>
                    <Text fontWeight="bold">Price</Text>
                    <Text>Rs. 2252</Text>
                </Box>


                <Box w="100px" m="auto">
                    <Text fontWeight="bold">Quantity</Text>
                    <Box display="flex" border="1px solid gray" bg="none">
                        <Button bg="none" onClick={()=>handleCount(1)}>+</Button>
                        <Text  m="auto">{count}</Text>
                        <Button bg="none" disabled={count==1} onClick={()=>handleCount(-1)}>-</Button>
                    </Box>
                </Box>

                <Box fontWeight="bold">
                    <Text >Total</Text>
                    <Text>Rs.2315</Text>
                </Box>
        </Box>
    )
}
export default CartCard;