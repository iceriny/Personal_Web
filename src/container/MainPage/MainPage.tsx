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
            templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
            gridTemplateRows={"50px 1fr 30px"}
            gridTemplateColumns={"150px 1fr"}
            h="200px"
            gap="1"
            color="blackAlpha.700"
            fontWeight="bold"
        >
            <GridItem pl="2" bg="orange.300" area={"header"}>
                {header}
            </GridItem>
            <GridItem pl="2" bg="pink.300" area={"nav"}>
                {nav}
            </GridItem>
            <GridItem pl="2" bg="green.300" area={"main"}>
                {main}
            </GridItem>
            <GridItem pl="2" bg="blue.300" area={"footer"}>
                {footer}
            </GridItem>
        </Grid>
    );
}

export default MainPage;
