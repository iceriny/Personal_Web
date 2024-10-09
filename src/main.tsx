import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import MyTheme from "./theme";
import Background from "./container/Background/Background";
import MouseEffect from "./container/MouseEffect/MouseEffect";

const rootElement = document.getElementById("root");
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <ChakraProvider theme={MyTheme.getTheme()}>
                <App />
            </ChakraProvider>
            <MouseEffect />
            <Background />
        </React.StrictMode>
    );
}
