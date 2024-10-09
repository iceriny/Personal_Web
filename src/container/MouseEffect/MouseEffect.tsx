import { useEffect, useRef, useState } from "react";
import MyTheme from "../../theme";
import MotionBox from "../MotionBox/MotionBox";
function MouseEffect() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 }); // 定义处理函数，实时获取鼠标位置
    const handleMouseMove = (event) => {
        setMousePosition({
            x: event.clientX,
            y: event.clientY,
        });
    };

    useEffect(() => {
        // 监听整个窗口的鼠标移动事件
        window.addEventListener("mousemove", handleMouseMove);

        // 组件卸载时移除事件监听器，避免内存泄漏
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);
    return (
        <MotionBox
            pos="absolute"
            w="8px"
            h="8px"
            borderRadius="50%"
            backgroundColor={MyTheme.colors.brand.asphalt_100}
            top={mousePosition.y - 4}
            left={mousePosition.x - 4}
            filter="auto"
            brightness="150%"
            pointerEvents="none"
        />
    );
}

export default MouseEffect;
