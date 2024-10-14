import MyTheme from "../../theme";
import MotionBox from "../MotionBox/MotionBox";
import { AnimatePresence } from "framer-motion";

interface Props {
    displayed?: boolean;
    maxBlur?: number;
    onClick?: () => void;
}
function Overlay({
    displayed = false,
    maxBlur = 5,
    onClick = undefined,
}: Props) {
    return (
        <AnimatePresence>
            {displayed && (
                <MotionBox
                    key="overlay"
                    pos="fixed"
                    top={0}
                    left={0}
                    w="100%"
                    h="100%"
                    bg="brand.asphalt_100_alpha_50"
                    // filter="auto"
                    // blur="2px"

                    backdropFilter={`blur(${maxBlur}px) brightness(90%)`}
                    pointerEvents={onClick ? "auto" : "none"}
                    animate={{
                        opacity: [0, 1],
                        transitionEnd: {
                            opacity: 1,
                        },
                    }}
                    exit={{ opacity: 0 }}
                >
                    <div
                        onClick={onClick}
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                    ></div>
                </MotionBox>
            )}
        </AnimatePresence>
    );
}

export default Overlay;
