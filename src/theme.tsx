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
            asphalt_300_alpha_10: "#85929ea0",
            asphalt_300_alpha_20: "#85929e5f",
            asphalt_300_alpha_30: "#85929e3d",
            asphalt_300_alpha_40: "#85929e2a",
            asphalt_300_alpha_45: "#85929e1e",
            asphalt_300_alpha_50: "#85929e80",
            asphalt_300_alpha_60: "#85929e2c",
            asphalt_300_alpha_70: "#85929e2f",
            asphalt_300_alpha_80: "#85929e36",
            asphalt_300_alpha_90: "#85929e3f",
            asphalt_300_alpha_95: "#85929e3c",
            asphalt_300_alpha_100: "#85929e2f",

            asphalt_400: "#5d6d7e",
            asphalt_400_alpha_10: "#5d6d7ea0",
            asphalt_400_alpha_20: "#5d6d7e5f",
            asphalt_400_alpha_30: "#5d6d7e3d",
            asphalt_400_alpha_40: "#5d6d7e2a",
            asphalt_400_alpha_45: "#5d6d7e1e",
            asphalt_400_alpha_50: "#5d6d7e80",
            asphalt_400_alpha_60: "#5d6d7e2c",
            asphalt_400_alpha_70: "#5d6d7e2f",
            asphalt_400_alpha_80: "#5d6d7e36",
            asphalt_400_alpha_90: "#5d6d7e3f",
            asphalt_400_alpha_95: "#5d6d7e3c",
            asphalt_400_alpha_100: "#5d6d7e2f",
            asphalt_500: "#34495e",
            asphalt_500_alpha_10: "#34495ea0",
            asphalt_500_alpha_20: "#34495e5f",
            asphalt_500_alpha_30: "#34495e3d",
            asphalt_500_alpha_40: "#34495e2a",
            asphalt_500_alpha_45: "#34495e1e",
            asphalt_500_alpha_50: "#34495e80",
            asphalt_500_alpha_60: "#34495e2c",
            asphalt_500_alpha_70: "#34495e2f",
            asphalt_500_alpha_80: "#34495e36",
            asphalt_500_alpha_90: "#34495e3f",
            asphalt_500_alpha_95: "#34495e3c",
            asphalt_500_alpha_100: "#34495e2f",

            asphalt_600: "#2e4053",
            asphalt_600_alpha_10: "#2e4053a0",
            asphalt_600_alpha_20: "#2e40535f",
            asphalt_600_alpha_30: "#2e40533d",
            asphalt_600_alpha_40: "#2e40532a",
            asphalt_600_alpha_45: "#2e40531e",
            asphalt_600_alpha_50: "#2e405380",
            asphalt_600_alpha_60: "#2e40532c",
            asphalt_600_alpha_70: "#2e40532f",
            asphalt_600_alpha_80: "#2e405336",
            asphalt_600_alpha_90: "#2e40533f",
            asphalt_600_alpha_95: "#2e40533c",
            asphalt_600_alpha_100: "#2e40532f",

            asphalt_700: "#283747",
            asphalt_700_alpha_10: "#283747a0",
            asphalt_700_alpha_20: "#2837475f",
            asphalt_700_alpha_30: "#2837473d",
            asphalt_700_alpha_40: "#2837472a",
            asphalt_700_alpha_45: "#2837471e",
            asphalt_700_alpha_50: "#28374780",
            asphalt_700_alpha_60: "#2837472c",
            asphalt_700_alpha_70: "#2837472f",
            asphalt_700_alpha_80: "#28374736",
            asphalt_700_alpha_90: "#2837473f",
            asphalt_700_alpha_95: "#2837473c",
            asphalt_700_alpha_100: "#2837472f",
            asphalt_800: "#212f3c",
            asphalt_800_alpha_10: "#212f3ca0",
            asphalt_800_alpha_20: "#212f3c5f",
            asphalt_800_alpha_30: "#212f3c3d",
            asphalt_800_alpha_40: "#212f3c2a",
            asphalt_800_alpha_45: "#212f3c1e",
            asphalt_800_alpha_50: "#212f3c80",
            asphalt_800_alpha_60: "#212f3c2c",
            asphalt_800_alpha_70: "#212f3c2f",
            asphalt_800_alpha_80: "#212f3c36",
            asphalt_800_alpha_90: "#212f3c3f",
            asphalt_800_alpha_95: "#212f3c3c",
            asphalt_800_alpha_100: "#212f3c2f",
            asphalt_900: "#1b2631",
            asphalt_900_alpha_10: "#1b2631a0",
            asphalt_900_alpha_20: "#1b26315f",
            asphalt_900_alpha_30: "#1b26313d",
            asphalt_900_alpha_40: "#1b26312a",
            asphalt_900_alpha_45: "#1b26311e",
            asphalt_900_alpha_50: "#1b263180",
            asphalt_900_alpha_60: "#1b26312c",
            asphalt_900_alpha_70: "#1b26312f",
            asphalt_900_alpha_80: "#1b263136",
            asphalt_900_alpha_90: "#1b26313f",
            asphalt_900_alpha_95: "#1b26313c",
            asphalt_900_alpha_100: "#1b26312f",

            red: "#e35353",
            darkred: "#931414",
            green: "#53e38e",
            darkgreen: "#1e6e2b",
        },
    };
    static styles = {
        global: {
            body: { cursor: "none", m: "0", p: "0" },
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
