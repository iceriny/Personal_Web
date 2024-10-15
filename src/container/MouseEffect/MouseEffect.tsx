import { useEffect, useState } from "react";
import MyTheme from "../../theme";
function MouseEffect() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 }); // 定义处理函数，实时获取鼠标位置
    const [mouseSize, setMouseSize] = useState(1);
    // const mouseSizeRef = useRef(mouseSize); // 更新 ref 每次 mouseSize 变化时

    // useEffect(() => {
    //     mouseSizeRef.current = mouseSize;
    // }, [mouseSize]);

    useEffect(() => {
        // 监听整个窗口的鼠标移动事件
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        // 组件卸载时移除事件监听器，避免内存泄漏
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);
    const handleMouseMove = (event: MouseEvent) => {
        setMousePosition({
            x: event.clientX,
            y: event.clientY,
        });
        // const currentMouseSize = mouseSizeRef.current;
        const elements = document.elementsFromPoint(
            event.clientX,
            event.clientY
        );

        for (const e of elements) {
            const canHover = e.getAttribute("data-can-hover");

            if (canHover === "true") {
                setMouseSize(2);
                return;
            } else if (canHover === null) {
                setMouseSize(1);
                return;
            }
        }
    };
    const handleMouseDown = () => {
        // console.log("点击了");
        setMouseSize(3);
    };
    const handleMouseUp = () => {
        // console.log("点击抬起");
        setMouseSize(1);
    };

    const blurValue = mouseSize - 1;
    return (
        // <MotionBox
        //     pos="absolute"
        //     w="8px"
        //     h="8px"
        //     borderRadius="50%"
        //     backgroundColor={MyTheme.colors.brand.asphalt_100}
        //     top={mousePosition.y - 4}
        //     left={mousePosition.x - 4}
        //     filter="auto"
        //     brightness="150%"
        //     pointerEvents="none"
        // />
        <div
            style={{
                position: "absolute",
                top: mousePosition.y - 4,
                left: mousePosition.x - 4,
                width: "8px",
                height: "8px",
                transform: `scale(${mouseSize})`,
                borderRadius: "50%",
                backgroundColor: MyTheme.colors.brand.asphalt_900,
                pointerEvents: "none",
                filter: `blur(${blurValue}px)`,
                zIndex: 1000,
                transition:
                    "transform 0.1s ease-in-out, filter 0.1s ease-in-out",
            }}
        />
    );
}

export default MouseEffect;
