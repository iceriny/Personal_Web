import { motion } from "framer-motion";
import { useState } from "react";
import { Variants } from "framer-motion";
import MyTheme from "../../theme";
interface Props {
    children: React.ReactNode;
    onClick?: () => void;
    w?: string;
    h?: string;
    activated?: boolean;
}
interface StatusState {
    isHovered: boolean;
    isFocused: boolean;
    isDisabled: boolean;
}
function NavButton({
    children,
    onClick = () => {
        console.log("Nav button clicked");
    },
    w = "100%",
    h = "2.5rem",
    activated = false,
}: Props) {
    const [status, _setStatus] = useState({
        isHovered: false,
        isFocused: false,
        isDisabled: false,
    });
    // 切换状态
    // const toggleStatus = (key: keyof StatusState) => {
    //     _setStatus((prev: StatusState) => ({ ...prev, [key]: !prev[key] }));
    // };
    // 设置状态
    const setStatus = (key: keyof StatusState, value: boolean) => {
        _setStatus((prev: StatusState) => ({ ...prev, [key]: value }));
    };
    // 获取状态
    const getMotionForState = () => {
        if (activated) {
            return "active";
        }
        const [isHovered] = Object.values(status);
        if (isHovered) {
            return "hover";
        }
    };

    const buttonVariants: Variants = {
        initial: {
            fontSize: "0.9rem",
            textShadow: `0px 0px 10px  ${MyTheme.colors.brand.asphalt_50}, 0px 0px 5px  ${MyTheme.colors.brand.asphalt_50}`,
        },
        hover: {
            fontSize: "1.7rem",
            textShadow: `0px 0px 10px  ${MyTheme.colors.brand.asphalt_50}, 0px 0px 5px  ${MyTheme.colors.brand.asphalt_50}, 0px 0px 15px  DodgerBlue`,
        },
        active: {
            fontSize: "2rem",
            textShadow: `0px 0px 10px  ${MyTheme.colors.brand.asphalt_50}, 0px 0px 5px  ${MyTheme.colors.brand.asphalt_50},  0px 0px 15px  Cyan`,
            marginBottom: "3vh",
            marginTop: "3vh",
        },
    };
    const HandleButtonClicked = () => {
        // toggleStatus("isActive");
        onClick();
    };
    const HandleMouseEnter = () => {
        setStatus("isHovered", true);
    };
    const HandleMouseLeave = () => {
        setStatus("isHovered", false);
    };

    return (
        <motion.div
            style={{
                position: "relative",
                display: "inline-flex",
                verticalAlign: "middle",
                borderRadius: "1rem",

                width: w,
                minWidth: "2.5rem",
                height: h,
                fontSize: "1rem",
                lineHeight: "1.2",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                border: "none",
                outline: "2px solid transparent",
                // cursor: "pointer",
                wordBreak: "keep-all",
            }}
            onClick={HandleButtonClicked}
            onMouseEnter={HandleMouseEnter}
            onMouseLeave={HandleMouseLeave}
            animate={getMotionForState() ?? "initial"}
            variants={buttonVariants}
        >
            {children}
        </motion.div>
    );
}

export default NavButton;
