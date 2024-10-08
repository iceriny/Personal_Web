import MainPage from "./container/MainPage/MainPage";
import Header from "./container/Header/Header";
import Nav from "./container/Nav/Nav";

// import test from "./testScript";
// import { useEffect } from "react";
function App() {
    // useEffect(() => {
    //     test();
    // }, []);
    return (
        <MainPage
            header={<Header>这是一行测试用的标题</Header>}
            nav={
                <Nav
                    items={[
                        [
                            "test",
                            () => {
                                console.log("test");
                            },
                        ],
                        [
                            "test",
                            () => {
                                console.log("test");
                            },
                        ],
                        [
                            "test",
                            () => {
                                console.log("test");
                            },
                        ],
                    ]}
                ></Nav>
            }
            main={"Main"}
            footer={"Footer"}
        />
    );
}

export default App;
