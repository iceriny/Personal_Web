import { useState } from "react";
import { Variants } from "framer-motion";
import { Box } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import MotionBox from "../MotionBox/MotionBox";
import MyTheme from "../../theme";
import Overlay from "../Overlay/Overlay";
import NavButton from "./NavButton";

interface Props {
    items: [React.ReactNode, () => void][];
}
function Nav({ items }: Props) {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [isDisplayedOverlay, setIsDisplayedOverlay] =
        useState<boolean>(false);
    const [activatedIndex, setActivatedIndex] = useState<number>(-1);
    const navVariants: Variants = {
        initial: {
            width: "100%",
            border: "1px solid " + MyTheme.colors.brand.asphalt_800_alpha_100,
        },
        hover: {
            width: "300px",
            backgroundColor: MyTheme.colors.brand.asphalt_900_alpha_95,
            border: "1px solid " + MyTheme.colors.brand.asphalt_600_alpha_50,
        },
    };
    const iconVariants: Variants = {
        initial: { margin: 5 },
        hover: { margin: 50, scale: 2 },
    };
    const itemVariants: Variants = {
        initial: { margin: 1 },
        hover: { margin: 20 },
    };
    // const buttonStyle = {
    //     bg: "none",
    //     color: "brand.asphalt_50",
    //     w: "99%",

    //     _hover: {
    //         bg: "blackAlpha.400",
    //         color: "brand.asphalt_400",
    //     },
    // };
    const createItem = (
        content: React.ReactNode,
        key: string,
        onclick: () => void,
        activated: boolean
    ) => {
        return (
            <MotionBox
                key={key}
                w="95%"
                animate={isHovered ? "hover" : "initial"}
                variants={itemVariants}
            >
                <Center>
                    {/* <Button onClick={onclick} {...buttonStyle}>
                        {content}
                    </Button> */}
                    <NavButton onClick={onclick} w="100%" activated={activated}>
                        {content}
                    </NavButton>
                </Center>
            </MotionBox>
        );
    };
    const createItems = () => {
        const _ = [];
        for (let index = 0; index < items.length; index++) {
            _.push(
                createItem(
                    items[index][0],
                    `nav_${index}`,
                    items[index][1],
                    activatedIndex === index
                )
            );
        }
        return _;
    };
    return (
        <>
            <Overlay displayed={isDisplayedOverlay} />
            <Box
                pos="relative"
                h={"100%"}
                roundedRight="2xl"
                onMouseEnter={() => {
                    setIsHovered(true);
                    setIsDisplayedOverlay(true);
                }}
                onMouseLeave={() => {
                    setIsHovered(false);
                    setIsDisplayedOverlay(false);
                }}
            >
                <MotionBox
                    display="flex"
                    flexDir="column"
                    alignItems="center"
                    justifyContent="center"
                    h="99%"
                    rounded="30"
                    variants={navVariants}
                    animate={isHovered ? "hover" : "initial"}
                >
                    <Center>
                        <MotionBox
                            animate={isHovered ? "hover" : "initial"}
                            variants={iconVariants}
                        >
                            <ChevronDownIcon />
                        </MotionBox>
                    </Center>

                    {createItems()}
                </MotionBox>
            </Box>
        </>
    );
}

export default Nav;
