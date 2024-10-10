import { useEffect, useState } from "react";

interface Props {
    x: number;
    y: number;
    size: number;
    color?: string;
    intensity?: number;
    distance?: number;
}

function ParallaxContainer({
    x: initialPositionX,
    y: initialPositionY,
    size,
    color = "blue",
    intensity = 1,
    distance = 5,
}: Props) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const [windowSize, setWindowSize] = useState({ w: 0, h: 0 });
    const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };
    // const handleMouseClick = (e: MouseEvent) => {
    //     console.log("鼠标点击屏幕全局事件");
    // };
    const handleWindowResize = () => {
        setWindowSize({ w: window.innerWidth, h: window.innerHeight });
    };
    useEffect(() => {
        handleWindowResize();
        window.addEventListener("resize", handleWindowResize);
        window.addEventListener("mousemove", handleMouseMove);
        // window.addEventListener("click", handleMouseClick);
        // 组件卸载时移除事件监听器，避免内存泄漏
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            // window.removeEventListener("click", handleMouseClick);
        };
    }, []);
    const calOffset = () => {
        // 屏幕坐标转百分比
        // 屏幕宽度/100 = 位置的百分比显示
        const widthSubdivision = windowSize.w / 100;
        const heightSubdivision = windowSize.h / 100;

        const halfSizeValue = (size * widthSubdivision) / 2;

        // 传入的坐标是百分比，所以乘每百分比的像素值就是传入值转为像素值
        initialPositionX = initialPositionX * widthSubdivision - halfSizeValue;
        initialPositionY = initialPositionY * heightSubdivision - halfSizeValue;

        // 如果不需要偏移，直接返回原坐标
        if (intensity == 0)
            return {
                x: initialPositionX,
                y: initialPositionY,
            };

        // 鼠标坐标转百分比, 以屏幕中心为基点
        const mouseX = (mousePosition.x - windowSize.w / 2) / widthSubdivision;
        const mouseY = (mousePosition.y - windowSize.h / 2) / heightSubdivision;

        const xOffset = (intensity / 20) * widthSubdivision * mouseX;
        const yOffset = (intensity / 20) * heightSubdivision * mouseY;
        return {
            x: initialPositionX + xOffset,
            y: initialPositionY + yOffset,
        };
    };
    const position = calOffset();
    return (
        <div
            style={{
                position: "absolute",
                top: position.y,
                left: position.x,
                width: `${size}vw`,
                height: `${size}vw`,
                borderRadius: "50%",
                backgroundColor: color,
                filter: `blur(${distance * 10}px)`,
                zIndex: "-1000",
            }}
        />
    );
}

export default ParallaxContainer;
