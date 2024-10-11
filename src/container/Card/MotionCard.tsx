import {
    Card,
    CardProps,
    CardHeader,
    CardBody,
    CardFooter,
} from "@chakra-ui/react";
import { motion, MotionProps } from "framer-motion";

interface MotionCardProps extends CardProps {
    children?: React.ReactNode;
    headerContent?: React.ReactNode;
    footerContent?: React.ReactNode;
}
type Props = MotionCardProps & MotionProps;
function MotionCard(props: Props) {
    console.log("MotionCard:", props);
    return (
        <Card
            as={motion.div}
            {...props}
            // height="40px"
            // width="40px"
            // bg="orange.400"
            // drag="x"
            // dragConstraints={{ left: -100, right: 100 }}
            // whileHover={{ scale: 1.1 }}
            // whileTap={{ scale: 0.9 }}
            // transition="0.5s linear"
            // not work: transition={{ transition: "0.5", ease: "linear" }}
        >
            {props.headerContent ?? (
                <CardHeader bg="-moz-initial">{props.headerContent}</CardHeader>
            )}
            <CardBody> {props.children} </CardBody>
            {props.footerContent ?? (
                <CardFooter>{props.footerContent}</CardFooter>
            )}
        </Card>
    );
}

export default MotionCard;
