// node_modules
import React from "react";
import { Grid, Heading, Text } from "@chakra-ui/react";

interface ValueItemProps {
    label: string;
    text: string;
}

const ValueItemBoxComponent: React.FC<ValueItemProps> = ({ label, text }) => {
    return (
        <>
            <Grid
                display={"grid"}
                alignItems={"center"}
                justifyContent={"center"}
                backgroundColor={"white"}
                width={"250px"}
                height={"100px"}
                boxShadow={"2px 4px 15px lightgray"}
                margin={"20px"}
            >
                <Heading padding={"2px"} margin={"0px"}>
                    {label}
                </Heading>
                <Text padding={"2px"} margin={"0px"} textAlign={"center"}>
                    {text}
                </Text>
            </Grid>
        </>
    );
};

export default ValueItemBoxComponent;