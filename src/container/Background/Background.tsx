import { motion } from "framer-motion";
import MyTheme from "../../theme";
import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
// <motion.div
//     style={{
//         background:
//             "linear-gradient(135deg,#121212 25%,#1a1a1a 25%,#1a1a1a 50%,#121212 50%,#121212 75%,#1a1a1a 75%,#1a1a1a)",
//         backgroundSize: "40px 40px",
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: "100vw",
//         height: "100vh",
//         zIndex: -999,
//         pointerEvents: "none",
//     }}
//     animate={{ backgroundPosition: ["0 0", "40px 40px"] }}
//     transition={{
//         ease: "linear",
//         repeat: Infinity,
//         duration: 3,
//     }}
// />
function Background() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const [windowSize, setWindowSize] = useState({ w: 0, h: 0 });
    const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleMouseClick = (e: MouseEvent) => {
        console.log("鼠标点击屏幕全局事件");
    };
    const handleWindowResize = () => {
        setWindowSize({ w: window.innerWidth, h: window.innerHeight });
    };
    useEffect(() => {
        handleWindowResize();
        window.addEventListener("resize", handleWindowResize);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("click", handleMouseClick);
        // 组件卸载时移除事件监听器，避免内存泄漏
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("click", handleMouseClick);
        };
    }, []);

    const calOffset = (
        initialPositionX: number,
        initialPositionY: number,
        intensity: number
    ) => {
        const widthSubdivision = windowSize.w / 100;
        const heightSubdivision = windowSize.h / 100;
        initialPositionX = initialPositionX * widthSubdivision;
        initialPositionY = initialPositionY * heightSubdivision;
        const mousePositionOfProportion = {
            x: mousePosition.x * widthSubdivision,
            y: mousePosition.y * heightSubdivision,
        };

        const xOffset =
            intensity *
            widthSubdivision *
            (mousePositionOfProportion.x - initialPositionX);
        const yOffset =
            intensity *
            heightSubdivision *
            (mousePositionOfProportion.y - initialPositionY);
        console.log(xOffset, yOffset);
        return {
            x: initialPositionX + xOffset,
            y: initialPositionY + yOffset,
        };
    };
    return (
        <div style={{ zIndex: -999 }}>
            <Box
                pos="absolute"
                top="0"
                left="0"
                w="100vw"
                h="100vh"
                backgroundColor={MyTheme.colors.brand.asphalt_200_alpha_10}
                pointerEvents="none"
                backdropFilter="auto"
                backdropBlur="20px"
                zIndex="-999"
            ></Box>
            <motion.div
                style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "20vw",
                    height: "20vw",
                    borderRadius: "50%",
                    backgroundColor: "blue",
                    filter: "blur(50px)",
                    zIndex: "-1000",
                }}
                animate={{
                    x: calOffset(20, 30, 2).x,
                    y: calOffset(20, 30, 2).y,
                }}
            />
        </div>
    );
}

export default Background;
