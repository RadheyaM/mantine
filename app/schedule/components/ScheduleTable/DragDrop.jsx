import React from "react";
import {useState} from 'react'
import DragDropItemPaper from "./DragDropItemPaper";
import { useDrop } from 'react-dnd'
import { Flex, Container } from "@mantine/core";

export default function () {
    const TempProductList = [
        {
            id: 1,
            productId: "7000A01",
            productName: "Carleton Premium Caramel"
        },
        {
            id: 2,
            productId: "7001A01",
            productName: "Carleton Valu Caramel"
        },
        {
            id: 3,
            productId: "7200A01",
            productName: "Carleton Paradise"
        }
    ];

    const [dropArea, setDropArea] = useState()

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "DragDropItemPaper",
        drop: (product) => addProductToDropArea(product.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));    

    const addProductToDropArea = (id) => {
        const tempProductList = TempProductList.filter((product) => id === product.id);
        setDropArea((dropArea) => [...dropArea, tempProductList[0]]);
    }

    return (
        <>
            <Flex
            mih={50}
            bg="rgba(0, 0, 0, .3)"
            gap="md"
            justify="flex-start"
            align="flex-start"
            direction="row"
            wrap="wrap"      
            >
                <Container className="DragItems" key={1}>
                    {TempProductList.map((product) => {
                        return <DragDropItemPaper productId={product.productId} productName={product.productName} id={product.id}/>
                    })}
                </Container>
                <Container mih={400} miw={400} key={2} style={{background: "grey"}} className="DropArea" ref={drop}>
                    {dropArea.map((product) => {
                        return <DragDropItemPaper productId={product.productId} productName={product.productName} id={product.id}/>
                    })}
                </Container>
            </Flex>
        </>
    )
}