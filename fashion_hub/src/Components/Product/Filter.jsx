import {Button, Heading, useDisclosure,Modal,
  ModalBody,ModalCloseButton,ModalContent,ModalOverlay,
  ModalHeader, FormLabel, Checkbox } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const Filter = () => {
    const {isOpen, onOpen, onClose}=useDisclosure()
    const [searchParams, setSearchParams]=useSearchParams();
    const initialState=searchParams.getAll("category");
    const [category,setCategory]=useState(initialState || []);

    const handleChange=(e)=>{
        let newCategory=[...category];
        let value=e.target.value;

        if(newCategory.includes(value)){
            newCategory.splice(newCategory.indexOf(value),1)
        }else{
            newCategory.push(value);
        }
        setCategory(newCategory);
       console.log(category);
    }
   
    
    useEffect(()=>{
      let params={
        category,
      }
      setSearchParams(params);
    },[category])
  return (
   <>
   <Button onClick={onOpen}>Filter</Button>
   <Modal isOpen={isOpen} onClose={onClose}>
   <ModalOverlay />
    <ModalContent>
    <ModalHeader>Filters:</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
        <Checkbox type="checkbox" value="Shirt" onChange={handleChange} checked={category.includes("Shirt")}/>
        <FormLabel>Shirt</FormLabel>
      
      
        <Checkbox type="checkbox" value="Hoodie" onChange={handleChange} checked={category.includes("Hoodie")}/>
        <FormLabel>Hoodie</FormLabel>
      
      
        <Checkbox type="checkbox" value="Joggers" onChange={handleChange} checked={category.includes("Joggers")}/>
        <FormLabel>Joggers</FormLabel>
      
      
        <Checkbox type="checkbox" value="Jackets" onChange={handleChange} checked={category.includes("Jackets")}/>
        <FormLabel>Jackets</FormLabel>
      
      
        <Checkbox type="checkbox" value="sweatshirts" onChange={handleChange} checked={category.includes("sweatshirts")}/>
        <FormLabel>Sweatshirts</FormLabel>
      
      
        <Checkbox type="checkbox" value="Shoes" onChange={handleChange} checked={category.includes("Shoes")}/>
        <FormLabel>Shoes</FormLabel>
      
      
        <Checkbox type="checkbox" value="outwears" onChange={handleChange} checked={category.includes("outwears")}/> 
        <FormLabel>Outwears</FormLabel>
      
      
        <Checkbox type="checkbox" value="Pants" onChange={handleChange} checked={category.includes("Pants")}/>
        <FormLabel>Pants</FormLabel>
      
      
        <Checkbox type="checkbox" value="T-Shirt" onChange={handleChange} checked={category.includes("T-Shirt")}/>
        <FormLabel>T-Shirt</FormLabel>
      
    </ModalBody>
    </ModalContent>
    </Modal>
    </>
  )
}

export default Filter;


