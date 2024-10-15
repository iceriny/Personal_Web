import { Box } from "@chakra-ui/react";

interface Props {
    children: React.ReactNode;
}
function MainContent({ children }: Props) {
    return (
        <Box
            m="3vh 2vw"
            paddingTop="2%"
            paddingLeft="2%"
            paddingBottom="1%"
            paddingRight="1%"
            backgroundColor="brand.asphalt_800_alpha_90"
            backdropFilter="auto"
            backdropBlur="10px"
            borderRadius="1.5vw"
            h="80vh"
            overflow="auto"
            boxShadow="0px 0px 50px 10px rgba(0,0,0,0.25)"
        >
            {children}
        </Box>
    );
}

export default MainContent;
