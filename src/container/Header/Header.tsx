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
        color: "brand.asphalt_100",
        textShadow: "0 0 20px black",
        fontWeight: "bold",
        fontSize: "20px",
        height: "45px",

        backgroundColor: "brand.asphalt_900_alpha",
    };
    return (
        <Box
            id="header"
            sx={innerBoxStyles}
            backdropFilter="auto"
            backdropBlur="8px"
            boxShadow={10}
            roundedBottom={"15px"}
        >
            <Box marginRight="30%">{children}</Box>
        </Box>
    );
};

export default Header;
