import MainPage from "./container/MainPage/MainPage";
import Header from "./container/Header/Header";
import Nav from "./container/Nav/Nav";
import MainContent from "./container/MainContent/MainContent";

// import test from "./testScript";
// import { useEffect } from "react";
function App() {
    // useEffect(() => {
    //     test();
    // }, []);
    return (
        <MainPage
            header={<Header>MyWeb</Header>}
            nav={
                <Nav
                    items={[
                        [
                            "概述",
                            () => {
                                console.log("test");
                            },
                        ],
                        [
                            "技能",
                            () => {
                                console.log("test");
                            },
                        ],
                        [
                            "渲染",
                            () => {
                                console.log("test");
                            },
                        ],
                        [
                            "其他",
                            () => {
                                console.log("test");
                            },
                        ],
                    ]}
                ></Nav>
            }
            main={
                <MainContent>
                    主要内容..... Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Cumque, ipsam. Nulla quos deserunt quod
                    dicta cupiditate omnis laudantium, dolor cumque odio
                    quisquam laboriosam blanditiis suscipit minus quasi tempore
                    hic accusantium iure excepturi cum corporis sapiente
                    adipisci laborum soluta. Quisquam similique magni optio
                    sequi praesentium aspernatur esse sapiente consectetur
                    nostrum est, iste repellat minima cupiditate sint officiis
                    delectus possimus accusantium incidunt odio cumque debitis
                    deserunt natus labore. Nobis, eveniet! Repellat non, veniam
                    molestiae dolorum, rerum amet quibusdam reiciendis deleniti
                    itaque tempora qui deserunt eum ex nulla tenetur ab alias
                    quisquam. Perspiciatis provident, voluptatem alias delectus
                    molestiae illum pariatur nulla deserunt aut earum quo vero
                    nemo exercitationem, dolorem consequuntur ab inventore,
                    dolore vitae quas. Dolorem odio voluptate assumenda quia!
                    Nihil doloremque ipsam esse officiis necessitatibus animi,
                    itaque sint magnam, earum natus, illum minus iusto odit
                    aliquid ea quam saepe totam in! Deleniti delectus voluptates
                    ut aspernatur. Aliquid excepturi enim quo consequatur
                    necessitatibus quibusdam repellat exercitationem accusamus!
                    Aspernatur hic ex reiciendis blanditiis sit ab officiis modi
                    dolorum, consequuntur quibusdam. Consectetur, totam in
                    quaerat corporis natus voluptatem, corrupti, voluptas porro
                    sint tenetur deserunt labore? Labore sed id architecto
                    asperiores officiis accusamus delectus dolorem veritatis
                    quas blanditiis nostrum voluptatem ipsa itaque cupiditate
                    aliquam aspernatur ipsam officia, nihil, repudiandae qui
                    reiciendis perspiciatis nobis, unde aut. Nisi illo
                    distinctio odit labore? Rerum, tenetur, quibusdam repellat
                    inventore distinctio vero voluptatum saepe quaerat, illo
                    quisquam ipsam modi doloremque quae iste quasi dolore qui
                    maxime excepturi beatae commodi. Adipisci deserunt,
                    repellendus ratione similique iste nam voluptatum quam
                    dolores voluptas sunt ullam rerum temporibus nisi deleniti
                    totam debitis. Quaerat exercitationem dignissimos
                    consequuntur in alias vitae reiciendis ducimus odio
                    similique labore, voluptates modi veritatis perferendis quae
                    delectus ipsum iusto! Minima, iure id explicabo aspernatur
                    eius sit molestiae? Dignissimos fugit fugiat quidem harum
                    quis, mollitia optio ducimus doloremque ab, corporis culpa
                    eos similique?
                </MainContent>
            }
            footer={"Footer"}
        />
    );
}

export default App;
