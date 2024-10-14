import MainPage from "./container/MainPage/MainPage";
import Header from "./container/Header/Header";
import Nav from "./container/Nav/Nav";
import MainContent from "./container/MainContent/MainContent";
import MasonryGallery from "./container/MasonryGallery/MasonryGallery";
import { useEffect, useState } from "react";

// import test from "./testScript";
// import { useEffect } from "react";
enum Page {
    Home,
    About,
    Skill,
    Render,
    Other,
}
// 定义类型
type ImportMetaGlobEager = Record<string, { default: string }>;

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

    const [images, setImages] = useState<string[]>([]);

    const importImages = () => {
        const imagesModules = import.meta.glob(
            "./assets/RenderImg/*.{png,jpg,jpeg,svg}",
            { eager: true }
        );
        const result = [];
        for (const path in imagesModules as ImportMetaGlobEager) {
            const _ = (imagesModules as ImportMetaGlobEager)[path];
            result.push(_.default);
        }
        return result;
    };

    useEffect(() => {
        setImages(importImages);
    }, []);

    const getRenderImgMasonry = () => {
        return <MasonryGallery images={images} gap={1.5} />;
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
