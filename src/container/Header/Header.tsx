import { Box } from "@chakra-ui/react";
import React from "react";
// import { motion } from "framer-motion";

interface Props {
    children?: React.ReactNode;
}
const Header = ({ children }: Props) => {
    const innerBoxStyles = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxSize: "full",
        color: "brand.asphalt_100",
        textShadow: "0 0 20px black",
        fontWeight: "bold",
        fontSize: "20px",

        backgroundColor: "brand.asphalt_900_alpha",
    };
    return (
        <Box
            translateX="50px"
            id="header"
            sx={innerBoxStyles}
            backdropFilter="auto"
            backdropBlur="8px"
            boxShadow={10}
            rounded="full"
        >
            {children}
        </Box>
    );
};

export default Header;
