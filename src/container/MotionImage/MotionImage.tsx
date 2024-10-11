// import { Image, ImageProps } from "@chakra-ui/react";
// import { motion, MotionProps } from "framer-motion";

// type Props = ImageProps & MotionProps;
// function MotionImage(props: Props) {
//     console.log("MotionCard:", props);
//     return <Image as={motion.image} {...props} />;
// }

// export default MotionImage;
// MotionBox.tsx
import { forwardRef } from "react";
import { chakra, shouldForwardProp, ChakraProps } from "@chakra-ui/react";
import { motion, isValidMotionProp, MotionProps } from "framer-motion";

interface Props {
    src: string;
    alt?: string;
}
// 定义结合了 Framer Motion 和 Chakra UI 的属性类型
type MotionChakraProps = MotionProps & ChakraProps & Props;

// 创建 Motion 组件，过滤掉 Framer Motion 不认识的 Chakra UI 属性
const Image = chakra(motion.img, {
    shouldForwardProp: (prop) =>
        isValidMotionProp(prop) || shouldForwardProp(prop),
});

// 使用 forwardRef 确保 ref 正确传递
const MotionImage = forwardRef<HTMLImageElement, MotionChakraProps>(
    (props, ref) => {
        return <Image ref={ref} {...props} />;
    }
);

MotionImage.displayName = "MotionImage";

export default MotionImage;
