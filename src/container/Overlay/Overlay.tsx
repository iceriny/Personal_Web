import MotionBox from "../MotionBox/MotionBox";
import { AnimatePresence } from "framer-motion";

interface Props {
    displayed?: boolean;
}
function Overlay({ displayed = false }: Props) {
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
                    bg="none"
                    // filter="auto"
                    // blur="2px"

                    backdropFilter="blur(5px) brightness(90%)"
                    pointerEvents="none"
                    animate={{
                        opacity: [0, 1],
                        transitionEnd: {
                            opacity: 1,
                        },
                    }}
                    exit={{ opacity: 0 }}
                />
            )}
        </AnimatePresence>
    );
}

export default Overlay;
