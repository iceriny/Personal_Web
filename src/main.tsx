import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import MyTheme from "./theme";
import { motion } from "framer-motion";

const rootElement = document.getElementById("root");
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <ChakraProvider theme={MyTheme.getTheme()}>
                <App />
                <motion.div
                    style={{
                        background:
                            "linear-gradient(135deg,#121212 25%,#1a1a1a 25%,#1a1a1a 50%,#121212 50%,#121212 75%,#1a1a1a 75%,#1a1a1a)",
                        backgroundSize: "40px 40px",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        zIndex: -999,
                        pointerEvents: "none",
                    }}
                    animate={{ backgroundPosition: ["0 0", "40px 40px"] }}
                    transition={{
                        ease: "linear",
                        repeat: Infinity,
                        duration: 3,
                    }}
                />
            </ChakraProvider>
        </React.StrictMode>
    );
}
