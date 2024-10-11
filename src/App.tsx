import MainPage from "./container/MainPage/MainPage";
import Header from "./container/Header/Header";
import Nav from "./container/Nav/Nav";
import MainContent from "./container/MainContent/MainContent";
import MasonryGallery from "./container/MasonryGallery/MasonryGallery ";
import { useState } from "react";

// import test from "./testScript";
// import { useEffect } from "react";
enum Page {
    Home,
    About,
    Skill,
    Render,
    Other,
}
function App() {
    // useEffect(() => {
    //     test();
    // }, []);
    const [currentPage, setCurrentPage] = useState(Page.About);

    const navItems: [string, () => void][] = [
        ["关于", () => setCurrentPage(Page.About)],
        ["技能", () => setCurrentPage(Page.Skill)],
        ["渲染", () => setCurrentPage(Page.Render)],
        ["其他", () => setCurrentPage(Page.Other)],
    ];

    const renderImages = [
        {
            src: "src/assets/RenderImg/马赛克卫生间.jpg",
            alt: "马赛克卫生间",
        },
        {
            src: "src/assets/RenderImg/俯视餐桌.jpg",
            alt: "马赛克厨房",
        },
        {
            src: "src/assets/RenderImg/水吧台.jpg",
        },
        {
            src: "src/assets/RenderImg/罗马柱床头几.jpg",
        },
        {
            src: "src/assets/RenderImg/木桌子.jpg",
        },
        {
            src: "src/assets/RenderImg/藤编椅.jpg",
        },
        {
            src: "src/assets/RenderImg/椅子.jpg",
        },
        {
            src: "src/assets/RenderImg/鱼缸.jpg",
        },
        {
            src: "src/assets/RenderImg/玄关.jpg",
        },
        {
            src: "src/assets/RenderImg/阳光床头.jpg",
        },
    ];

    const getRenderImgMasonry = () => {
        return <MasonryGallery img={renderImages} />;
    };

    const getMainContent = () => {
        switch (currentPage) {
            case Page.Home:
                return <></>;
            case Page.About:
                return <></>;
            case Page.Skill:
                return <></>;
            case Page.Render:
                return getRenderImgMasonry();
        }
    };
    return (
        <MainPage
            header={<Header>Su's Personal Profile</Header>}
            nav={<Nav items={navItems} activatedIndex={currentPage - 1}></Nav>}
            main={<MainContent>{getMainContent()}</MainContent>}
            footer={"Footer"}
        />
    );
}

export default App;
