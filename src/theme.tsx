// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";
// 2. Extend the theme to include custom colors, fonts, etc

class MyTheme {
    static colors = {
        brand: {
            asphalt_25: "#f4f6f9",
            asphalt_25_alpha_10: "#f4f6f9E6",
            asphalt_25_alpha_20: "#f4f6f9CC",
            asphalt_25_alpha_30: "#f4f6f9B3",
            asphalt_25_alpha_40: "#f4f6f999",
            asphalt_25_alpha_50: "#f4f6f980",
            asphalt_25_alpha_60: "#f4f6f966",
            asphalt_25_alpha_70: "#f4f6f94d",
            asphalt_25_alpha_80: "#f4f6f933",
            asphalt_25_alpha_90: "#f4f6f91A",
            asphalt_25_alpha_100: "#f4f6f900",

            asphalt_50: "#ebedef",
            asphalt_50_alpha_10: "#ebedefE6",
            asphalt_50_alpha_20: "#ebedefCC",
            asphalt_50_alpha_30: "#ebedefB3",
            asphalt_50_alpha_40: "#ebedef99",
            asphalt_50_alpha_50: "#ebedef80",
            asphalt_50_alpha_60: "#ebedef66",
            asphalt_50_alpha_70: "#ebedef4d",
            asphalt_50_alpha_80: "#ebedef33",
            asphalt_50_alpha_90: "#ebedef1A",
            asphalt_50_alpha_100: "#ebedef00",

            asphalt_100: "#d6dbdf",
            asphalt_100_alpha_10: "#d6dbdfE6",
            asphalt_100_alpha_20: "#d6dbdfCC",
            asphalt_100_alpha_30: "#d6dbdfB3",
            asphalt_100_alpha_40: "#d6dbdf99",
            asphalt_100_alpha_50: "#d6dbdf80",
            asphalt_100_alpha_60: "#d6dbdf66",
            asphalt_100_alpha_70: "#d6dbdf4d",
            asphalt_100_alpha_80: "#d6dbdf33",
            asphalt_100_alpha_90: "#d6dbdf1A",
            asphalt_100_alpha_100: "#d6dbdf00",

            asphalt_200: "#aeb6bf",
            asphalt_200_alpha_10: "#aeb6bfE6",
            asphalt_200_alpha_20: "#aeb6bfCC",
            asphalt_200_alpha_30: "#aeb6bfB3",
            asphalt_200_alpha_40: "#aeb6bf99",
            asphalt_200_alpha_50: "#aeb6bf80",
            asphalt_200_alpha_60: "#aeb6bf66",
            asphalt_200_alpha_70: "#aeb6bf4d",
            asphalt_200_alpha_80: "#aeb6bf33",
            asphalt_200_alpha_90: "#aeb6bf1A",
            asphalt_200_alpha_100: "#aeb6bf00",

            asphalt_300: "#85929e",
            asphalt_300_alpha_10: "#85929eE6",
            asphalt_300_alpha_20: "#85929eCC",
            asphalt_300_alpha_30: "#85929eB3",
            asphalt_300_alpha_40: "#85929e99",
            asphalt_300_alpha_50: "#85929e80",
            asphalt_300_alpha_60: "#85929e66",
            asphalt_300_alpha_70: "#85929e4d",
            asphalt_300_alpha_80: "#85929e33",
            asphalt_300_alpha_90: "#85929e1A",
            asphalt_300_alpha_100: "#85929e00",

            asphalt_400: "#5d6d7e",
            asphalt_400_alpha_10: "#5d6d7eE6",
            asphalt_400_alpha_20: "#5d6d7eCC",
            asphalt_400_alpha_30: "#5d6d7eB3",
            asphalt_400_alpha_40: "#5d6d7e99",
            asphalt_400_alpha_50: "#5d6d7e80",
            asphalt_400_alpha_60: "#5d6d7e66",
            asphalt_400_alpha_70: "#5d6d7e4d",
            asphalt_400_alpha_80: "#5d6d7e33",
            asphalt_400_alpha_90: "#5d6d7e1A",
            asphalt_400_alpha_100: "#5d6d7e00",

            asphalt_500: "#34495e",
            asphalt_500_alpha_10: "#34495eE6",
            asphalt_500_alpha_20: "#34495eCC",
            asphalt_500_alpha_30: "#34495eB3",
            asphalt_500_alpha_40: "#34495e99",
            asphalt_500_alpha_50: "#34495e80",
            asphalt_500_alpha_60: "#34495e66",
            asphalt_500_alpha_70: "#34495e4d",
            asphalt_500_alpha_80: "#34495e33",
            asphalt_500_alpha_90: "#34495e1A",
            asphalt_500_alpha_100: "#34495e00",

            asphalt_600: "#2e4053",
            asphalt_600_alpha_10: "#2e4053E6",
            asphalt_600_alpha_20: "#2e4053CC",
            asphalt_600_alpha_30: "#2e4053B3",
            asphalt_600_alpha_40: "#2e405399",
            asphalt_600_alpha_50: "#2e405380",
            asphalt_600_alpha_60: "#2e405336",
            asphalt_600_alpha_70: "#2e40534d",
            asphalt_600_alpha_80: "#2e405333",
            asphalt_600_alpha_90: "#2e40531A",
            asphalt_600_alpha_100: "#2e405300",

            asphalt_700: "#283747",
            asphalt_700_alpha_10: "#283747E6",
            asphalt_700_alpha_20: "#283747CC",
            asphalt_700_alpha_30: "#283747B3",
            asphalt_700_alpha_40: "#28374799",
            asphalt_700_alpha_50: "#28374780",
            asphalt_700_alpha_60: "#28374766",
            asphalt_700_alpha_70: "#2837474d",
            asphalt_700_alpha_80: "#28374733",
            asphalt_700_alpha_90: "#2837471A",
            asphalt_700_alpha_100: "#28374700",

            asphalt_800: "#212f3c",
            asphalt_800_alpha_10: "#212f3cE6",
            asphalt_800_alpha_20: "#212f3cCC",
            asphalt_800_alpha_30: "#212f3cB3",
            asphalt_800_alpha_40: "#212f3c99",
            asphalt_800_alpha_50: "#212f3c80",
            asphalt_800_alpha_60: "#212f3c66",
            asphalt_800_alpha_70: "#212f3c4d",
            asphalt_800_alpha_80: "#212f3c33",
            asphalt_800_alpha_90: "#212f3c1A",
            asphalt_800_alpha_100: "#212f3c00",

            asphalt_900: "#1b2631",
            asphalt_900_alpha_10: "#1b2631E6",
            asphalt_900_alpha_20: "#1b2631CC",
            asphalt_900_alpha_30: "#1b2631B3",
            asphalt_900_alpha_40: "#1b263199",
            asphalt_900_alpha_50: "#1b263180",
            asphalt_900_alpha_60: "#1b263166",
            asphalt_900_alpha_70: "#1b26314d",
            asphalt_900_alpha_80: "#1b263133",
            asphalt_900_alpha_90: "#1b26311A",
            asphalt_900_alpha_100: "#1b263100",

            red: "#e35353",
            darkred: "#931414",
            green: "#53e38e",
            darkgreen: "#1e6e2b",
        },
    };
    static styles = {
        global: {
            body: {
                cursor: "none",
                m: "0",
                p: "0",
                overflow: "hidden",
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
