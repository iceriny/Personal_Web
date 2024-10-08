import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Box, ModalOverlay, useDisclosure, Button } from "@chakra-ui/react";
import { Center, Square, Circle } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

function Nav() {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const navVariants: Variants = {
        initial: { width: "100%" },
        hover: { width: "300px" },
    };
    const iconVariants: Variants = {
        initial: { margin: 5 },
        hover: { margin: 50, scale: 2 },
    };
    return (
        <Box
            pos="relative"
            h={"100%"}
            roundedRight="2xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                style={{ height: "99%" }}
                variants={navVariants}
                animate={isHovered ? "hover" : "initial"}
            >
                <Box
                    backdropFilter="auto"
                    backdropBlur="8px"
                    h={"100%"}
                    zIndex={-99}
                >
                    <Center>
                        <motion.div
                            animate={isHovered ? "hover" : "initial"}
                            variants={iconVariants}
                        >
                            <ChevronDownIcon />
                        </motion.div>
                    </Center>
                    <Center>
                        <Button bg="none" color="brand.asphalt_50">
                            test
                        </Button>
                    </Center>
                    <Center>
                        <Button bg="none" color="brand.asphalt_50">
                            test
                        </Button>
                    </Center>
                    <Center>
                        <Button bg="none" color="brand.asphalt_50">
                            test
                        </Button>
                    </Center>
                </Box>
            </motion.div>
        </Box>
    );
}

export default Nav;
