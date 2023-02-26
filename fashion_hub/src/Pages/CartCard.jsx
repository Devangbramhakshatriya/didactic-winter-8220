import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useState } from "react";

export const total=[];
function CartCard({data,handleDicrement,handleIncrement,i,deleteCart}){
    const cartData=JSON.parse(localStorage.getItem("cart"))||[]
    const [count,setCount]=useState(1)
    const handleCount=(val)=>{
        setCount(count+val)
    }
// total.push(count*data.price);
    // console.log(data.image)
    return(
        <Box display={["","flex","flex","flex","flex","flex"]} w="95%" m="auto" justifyContent="space-between" borderTop="1px solid gray" borderBottom="1px solid gray" fontFamily="sans-serif" alignContent="center" alignItems="center">
                <Box w={["50%","30%","30%","35%","35%","40%"]}  m="auto">
                    <Text fontWeight="bold">Product</Text>
                    <Box display="flex" gap="10px">
                        <Box w={["90%","60%","50%","25%","20%","20%"]}>
                            <Image src={data.image}/>
                        </Box>
                        <Box m="auto">
                            <Text>{data.name}</Text>
                            <Text>{data.subhead}</Text>
                            <Button onClick={()=>deleteCart(i)}>Remove</Button>
                        </Box>
                    </Box>
                </Box>

                <Box>
                    <Text fontWeight="bold">Price</Text>
                    <Text>{data.price}</Text>
                </Box>


                <Box w="100px" m="auto">
                    <Text fontWeight="bold">Quantity</Text>
                    <Box display="flex" border="1px solid gray" bg="none">
                        <Button bg="none" onClick={()=>handleIncrement(data.id)}>+</Button>
                        <Text  m="auto">{data.quantity}</Text>
                        <Button bg="none" isDisabled={data.quantity==1? true:false} onClick={()=>handleDicrement(data.id)}>-</Button>
                    </Box>
                </Box>

                <Box fontWeight="bold">
                    <Text >Total</Text>
                    <Text>{data.quantity*data.price}</Text>

                </Box>
        </Box>
        
    )
}
export default CartCard;