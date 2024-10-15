import MyTheme from "../../theme";
import { Box } from "@chakra-ui/react";
// import { useEffect } from "react";
import ParallaxContainer from "../ParallaxContainer/ParallaxContainer";

function Background() {
    // const handleMouseClick = (e: MouseEvent) => {
    //     console.log("鼠标点击屏幕全局事件", e);
    // };

    // useEffect(() => {
    //     window.addEventListener("click", handleMouseClick);
    //     // 组件卸载时移除事件监听器，避免内存泄漏
    //     return () => {
    //         window.removeEventListener("click", handleMouseClick);
    //     };
    // }, []);

    return (
        <div style={{ zIndex: -999 }}>
            <Box
                pos="absolute"
                top="0"
                left="0"
                w="100vw"
                h="100vh"
                backgroundColor={MyTheme.colors.brand.asphalt_100_alpha_10}
                pointerEvents="none"
                // backdropFilter="auto"
                // backdropBlur="0px"
                zIndex="-999"
            ></Box>
            <ParallaxContainer
                x={5}
                y={90}
                size={50}
                color="MediumSpringGreen"
                intensity={2}
                distance={10}
            />
            <ParallaxContainer
                x={20}
                y={20}
                size={40}
                color="LightCyan"
                intensity={1}
                distance={10}
            />
            <ParallaxContainer
                x={5}
                y={10}
                size={5}
                color="LightSalmon"
                intensity={5}
                distance={5}
            />
            <ParallaxContainer
                x={50}
                y={99}
                size={15}
                color="DeepPink"
                intensity={5}
                distance={6}
            />
        </div>
    );
}

export default Background;
