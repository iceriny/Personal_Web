// MotionBox.tsx
import { forwardRef } from "react";
import { chakra, shouldForwardProp, ChakraProps } from "@chakra-ui/react";
import { motion, isValidMotionProp, MotionProps } from "framer-motion";

// 定义结合了 Framer Motion 和 Chakra UI 的属性类型
type MotionChakraProps = MotionProps & ChakraProps;

// 创建 Motion 组件，过滤掉 Framer Motion 不认识的 Chakra UI 属性
const Box = chakra(motion.div, {
    shouldForwardProp: (prop) =>
        isValidMotionProp(prop) || shouldForwardProp(prop),
});

// 使用 forwardRef 确保 ref 正确传递
const MotionBox = forwardRef<HTMLDivElement, MotionChakraProps>(
    (props, ref) => {
        return <Box ref={ref} {...props} />;
    }
);

MotionBox.displayName = "MotionBox";

// import { BoxProps, Box } from "@chakra-ui/react";
// import { motion, MotionProps } from "framer-motion";
// type MotionChakraProps = MotionProps & BoxProps;
// function MotionBox(props: MotionChakraProps) {
//     props.as = motion.div;
//     return <Box {...props} />;
// }

export default MotionBox;
