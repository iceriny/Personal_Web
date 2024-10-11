// import MyTheme from "../../theme";
import MotionCard from "./MotionCard";

interface Props {
    children?: React.ReactNode;
}
function Card({ children }: Props) {
    return (
        <MotionCard w="30%" whileHover={{ scale: 1.1 }}>
            {children}
        </MotionCard>
    );
}

export default Card;
