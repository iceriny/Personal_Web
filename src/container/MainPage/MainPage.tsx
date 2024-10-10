import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";

interface Props {
    header: React.ReactNode;
    nav: React.ReactNode;
    main: React.ReactNode;
    footer: React.ReactNode;
}
function MainPage({ header, nav, main, footer }: Props) {
    return (
        <Grid
            templateAreas={`"nav header"
                  "nav main"
                  "nav footer"`}
            gridTemplateRows={"50px 1fr 30px"}
            gridTemplateColumns={"50px 1fr"}
            h="100vh"
            gap="2"
            color="brand.asphalt_100"
            p="2vh 1vw"
            overflow="hidden"
        >
            <GridItem pl="2" zIndex={1} area={"header"} p={0}>
                {header}
            </GridItem>
            <GridItem pl="2" area={"main"} p={0}>
                {main}
            </GridItem>
            <GridItem pl="2" area={"nav"} p={0}>
                {nav}
            </GridItem>
            <GridItem pl="2" area={"footer"} p={0}>
                {footer}
            </GridItem>
        </Grid>
    );
}

export default MainPage;
