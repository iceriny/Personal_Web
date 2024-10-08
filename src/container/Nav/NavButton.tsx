import { motion } from "framer-motion";
import { useState } from "react";
import { Variants } from "framer-motion";
interface Props {
    children: React.ReactNode;
    onClick?: () => void;
    w?: string;
    h?: string;
    activated?: boolean;
}
interface StatusState {
    isActive: boolean;
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
        isActive: activated ?? false,
        isHovered: false,
        isFocused: false,
        isDisabled: false,
    });
    // 切换状态
    const toggleStatus = (key: keyof StatusState) => {
        _setStatus((prev: StatusState) => ({ ...prev, [key]: !prev[key] }));
    };
    // 设置状态
    const setStatus = (key: keyof StatusState, value: boolean) => {
        _setStatus((prev: StatusState) => ({ ...prev, [key]: value }));
    };
    // 获取状态
    const getMotionForState = () => {
        const [isActive, isHovered] = Object.values(status);
        if (isHovered) {
            return "hover";
        } else if (isActive) {
            return "active";
        }
    };
    const buttonStyle = {
        position: "relative",
        display: "inline-flex",
        verticalAlign: "middle",
        borderRadius: "5px",

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
        cursor: "pointer",
    };

    const buttonVariants: Variants = {
        initial: {},
        hover: { backgroundColor: "#34495e" },
        active: { backgroundColor: "#1a5b9b" },
    };
    const HandleButtonClicked = () => {
        toggleStatus("isActive");
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
                borderRadius: "5px",

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
                cursor: "pointer",
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
