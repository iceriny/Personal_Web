import { Box } from "@chakra-ui/react";

interface Props {
    children: React.ReactNode;
}
function MainContent({ children }: Props) {
    return (
        <Box
            m="5%"
            paddingTop="2%"
            paddingLeft="2%"
            paddingBottom="1%"
            paddingRight="1%"
            backgroundColor="brand.asphalt_800_alpha_95"
            backdropFilter="auto"
            backdropBlur="10px"
            borderRadius="1.5vw"
        >
            {children}
        </Box>
    );
}

export default MainContent;
