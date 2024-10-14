import { Box, BoxProps } from "@chakra-ui/react";
import { motion, MotionProps } from "framer-motion";

// interface Props {
//     src: string;
//     alt?: string;
// }
interface Props {
    src: string;
    alt?: string;
    boxProps?: BoxProps;
    motionProps?: MotionProps;
}

function MotionImage(props: Props) {
    return (
        <Box {...props.boxProps}>
            <motion.img
                src={props.src}
                alt={props.alt}
                {...props.motionProps}
            />
        </Box>
    );
}

export default MotionImage;
