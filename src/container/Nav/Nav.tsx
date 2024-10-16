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
    activatedIndex?: number;
}
function Nav({ items, activatedIndex }: Props) {
    // 状态对象定义
    const [status, _setStatus] = useState({
        isHovered: false,
        isDisplayedOverlay: false,
        activatedIndex: activatedIndex,
    });
    // 设置状态
    const SetStatus = <K extends keyof typeof status>(
        key: keyof typeof status,
        value: (typeof status)[K]
    ) => {
        _setStatus((prev: typeof status) => ({ ...prev, [key]: value }));
    };
    // 状态对象获取
    const GetStatus = <K extends keyof typeof status>(
        key: K
    ): (typeof status)[K] => {
        return status[key];
    };

    const navVariants: Variants = {
        initial: {
            width: "100%",
            border: "0px solid " + MyTheme.colors.brand.asphalt_100_alpha_100,
            boxShadow: `0px 0px 10px ${MyTheme.colors.brand.asphalt_900_alpha_100}`,
        },
        hover: {
            width: "300px",
            backgroundColor: MyTheme.colors.brand.asphalt_25_alpha_90,
            border: "2px solid " + MyTheme.colors.brand.asphalt_100_alpha_50,
            boxShadow: `0px 0px 100px ${MyTheme.colors.brand.asphalt_900_alpha_70}`,
        },
    };
    const iconVariants: Variants = {
        initial: { margin: 5 },
        hover: { margin: 10, scale: 2 },
    };
    const itemVariants: Variants = {
        initial: { marginBottom: "0vh", marginTop: "0vh" },
        hover: { marginBottom: "1vh", marginTop: "1vh" },
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
                animate={GetStatus("isHovered") ? "hover" : "initial"}
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
                    () => {
                        items[index][1]();
                        SetStatus("activatedIndex", index);
                    },
                    GetStatus("activatedIndex") === index
                )
            );
        }
        return _;
    };
    return (
        <>
            <Overlay maxBlur={7} displayed={GetStatus("isDisplayedOverlay")} />
            <Box
                pos="relative"
                h={"100%"}
                roundedRight="2xl"
                onMouseEnter={() => {
                    SetStatus("isHovered", true);
                    SetStatus("isDisplayedOverlay", true);
                }}
                onMouseLeave={() => {
                    SetStatus("isHovered", false);
                    SetStatus("isDisplayedOverlay", false);
                }}
                p={["3vh 10vw", "3vh 7vw", "3vh 5.5vw", "4vh 3vw"]}
            >
                <MotionBox
                    display="flex"
                    flexDir="column"
                    alignItems="center"
                    justifyContent="center"
                    h="99%"
                    rounded="30"
                    variants={navVariants}
                    animate={GetStatus("isHovered") ? "hover" : "initial"}
                >
                    <Center>
                        <MotionBox
                            animate={
                                GetStatus("isHovered") ? "hover" : "initial"
                            }
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
