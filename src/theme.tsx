// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";
// 2. Extend the theme to include custom colors, fonts, etc

class MyTheme {
    static colors = {
        brand: {
            asphalt_50: "#ebedef",
            asphalt_100: "#ebedef",
            asphalt_200: "#aeb6bf",
            asphalt_300: "#85929e",
            asphalt_400: "#5d6d7e",
            asphalt_500: "#34495e",
            asphalt_600: "#2e4053",
            asphalt_700: "#283747",
            asphalt_800: "#212f3c",
            asphalt_900: "#1b2631",
            asphalt_900_alpha: "#1b263180",

            red: "#e35353",
            darkred: "#931414",
            green: "#53e38e",
            darkgreen: "#1e6e2b",
        },
    };
    static styles = {
        global: {
            body: {
                m: "0",
                p: "0",
            },
        },
    };
    static theme = extendTheme({
        colors: MyTheme.colors,
        styles: MyTheme.styles,
    });

    static getTheme() {
        return MyTheme.theme;
    }

    static getColor(color: string) {
        return MyTheme.theme.colors[color];
    }
}

export default MyTheme;
