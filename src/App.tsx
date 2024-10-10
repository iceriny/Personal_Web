import MainPage from "./container/MainPage/MainPage";
import Header from "./container/Header/Header";
import Nav from "./container/Nav/Nav";
import MainContent from "./container/MainContent/MainContent";
import { Box, Text } from "@chakra-ui/react";

// import test from "./testScript";
// import { useEffect } from "react";
function App() {
    // useEffect(() => {
    //     test();
    // }, []);
    return (
        <MainPage
            header={<Header>Su's Web</Header>}
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
                    <Box display="none">
                        <Text textIndent="2em" my="1rem">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Rerum blanditiis omnis aliquid debitis quo?
                            Quod, ipsum blanditiis. Cum, consequuntur. Facilis
                            quidem dolorum eius voluptatem voluptates. Voluptas,
                            in! Velit, amet. Amet consequatur excepturi eligendi
                            officia aut aperiam laborum, quisquam impedit odit
                            alias inventore debitis eaque nostrum dolore nam
                            tempore accusantium ab pariatur! Nemo voluptates
                            voluptatum aut, voluptate atque perferendis optio
                            aliquid nihil ducimus sed quae minus. Labore quidem
                            eos sunt, repudiandae commodi dignissimos incidunt
                            accusantium facilis laborum tempore sequi animi
                            distinctio quos hic laudantium corporis, quo porro
                            earum adipisci pariatur aliquid eligendi minima
                            natus. Eum dolor accusantium debitis, corrupti iure
                            atque.
                        </Text>
                        <Text textIndent="2em" my="1rem">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ut rem, aut, totam repellendus maiores
                            asperiores earum eligendi commodi neque quos tenetur
                            soluta distinctio, officia vero? Provident
                            reprehenderit, sit suscipit odit itaque similique
                            assumenda dolorum vero quidem, necessitatibus fuga
                            eius earum et nostrum error repellat! Quod dolorum
                            aliquam suscipit ipsam accusantium!
                        </Text>

                        <Text textIndent="2em" my="1rem">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. A, nesciunt alias expedita accusantium iure
                            provident impedit officiis amet corrupti ullam,
                            laudantium doloribus ea labore? Doloribus illum
                            tempore similique explicabo iste?
                        </Text>

                        <Text textIndent="2em" my="1rem">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Veritatis laudantium corrupti maxime deleniti
                            labore, earum consequatur iure nulla id nostrum
                            necessitatibus magnam repudiandae explicabo fugiat
                            illum cumque harum culpa fugit ipsum nihil eius sint
                            dignissimos? Laborum perferendis sed asperiores
                            porro temporibus ipsa sequi expedita quia hic?
                            Molestias perspiciatis officia molestiae, facilis,
                            amet nulla dolor ducimus veritatis, placeat corporis
                            vel possimus?
                        </Text>

                        <Text textIndent="2em" my="1rem">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Enim accusantium eius molestiae sapiente ipsa
                            nemo deleniti. Minus, suscipit tempora? Voluptates
                            fugit maiores dicta dolore. Deleniti quia asperiores
                            ducimus id voluptate aliquid similique ratione!
                            Nulla, tenetur sed! Ipsum, non consequuntur illum
                            culpa doloremque sequi, dicta aliquam facere aliquid
                            porro voluptatum molestiae accusantium enim, maxime
                            quibusdam delectus adipisci aperiam voluptatem!
                            Dolorum distinctio labore quo iusto sequi at
                            deleniti sapiente reprehenderit. Ab perspiciatis
                            unde officiis dolorum corporis eligendi ipsum sint!
                            Doloremque ullam distinctio nesciunt repellendus
                            officiis corrupti ducimus alias repudiandae officia
                            consectetur provident, aliquid labore soluta
                            adipisci aut, nulla error dolores harum
                            exercitationem, illo dolor temporibus. Ab sapiente
                            in non autem, est voluptatum odio perspiciatis
                            assumenda, ex libero ipsa eius quibusdam ea
                            blanditiis?
                        </Text>

                        <Text textIndent="2em" my="1rem">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Alias blanditiis temporibus error in atque
                            dolorem praesentium provident dignissimos incidunt
                            eveniet! Expedita consequatur iste provident? Ab non
                            sint in nulla aliquam rem doloremque praesentium!
                            Odit iure adipisci dignissimos tenetur fugiat,
                            voluptate veniam nobis consequatur atque ab hic
                            dolor alias ut sunt exercitationem harum nam magni
                            tempora, necessitatibus perferendis praesentium
                            itaque. Magni soluta, reprehenderit harum corrupti
                            similique dolores fugiat reiciendis animi blanditiis
                            deleniti a illum itaque asperiores atque ullam
                            perferendis sit distinctio? Assumenda hic vitae
                            saepe cum est quidem aut cumque beatae
                            exercitationem possimus quas nobis accusamus quam
                            impedit excepturi dignissimos itaque alias fuga
                            placeat illo sit dolores, quis quasi. Commodi
                            voluptate alias expedita fugiat, cupiditate omnis
                            saepe ducimus, repudiandae doloribus magnam hic
                            consectetur debitis nulla corrupti reiciendis, minus
                            nobis labore iste. Repellendus repellat doloribus
                            animi eligendi natus, quae dolores minima culpa ad
                            esse non cumque eveniet, maxime dicta ipsum aut,
                            exercitationem nostrum officiis obcaecati optio
                            saepe doloremque error fugit sed? Recusandae nisi,
                            nam labore obcaecati minima sunt dolor error
                            provident cupiditate dolorem voluptatem rem. Saepe
                            dolor ullam nobis quod distinctio voluptates, eius,
                            aperiam, magnam obcaecati molestias sapiente tempore
                            quasi possimus voluptatibus fuga necessitatibus
                            numquam accusantium laboriosam architecto delectus
                            vitae aut dolore?
                        </Text>

                        <Text textIndent="2em" my="1rem">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Exercitationem, molestias at labore est eaque
                            magnam aliquam placeat error, laborum ab aliquid hic
                            aspernatur maiores perferendis adipisci odit. Eos
                            corporis est iure non labore totam error nobis,
                            aspernatur doloribus eveniet, praesentium sint quo
                            expedita. Aspernatur fugiat ipsa excepturi a labore
                            non nam doloribus inventore reiciendis cum, unde
                            delectus eveniet laborum error earum consequatur!
                            Quia ut debitis aperiam ad sapiente, aut, ea et rem
                            eos laborum nobis, vero animi eum optio odio velit.
                            Quos unde a doloremque illo omnis veniam amet
                            adipisci?
                        </Text>

                        <Text textIndent="2em" my="1rem">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Voluptatum numquam voluptate officia sed
                            inventore minima fugiat ut ipsa quia, temporibus
                            nisi perspiciatis sunt sapiente deleniti facilis
                            rerum sint, saepe quas facere nam expedita! Ea
                            similique vitae tempora perspiciatis veritatis.
                            Debitis neque vitae nulla adipisci minus eos cumque
                            laborum, eaque reiciendis, error impedit omnis velit
                            dolorum. Odio illo recusandae in voluptatem nulla id
                            at ducimus pariatur illum dolores. Id aut rerum
                            animi cumque, tempore quo consequuntur labore
                            quaerat distinctio. Optio quod delectus aut.
                            Reprehenderit earum officia ipsam quae libero! Iure,
                            porro beatae qui tempore id omnis eveniet est quo.
                            Mollitia, necessitatibus recusandae ea reiciendis
                            soluta numquam. Officia aspernatur eveniet, adipisci
                            assumenda delectus numquam accusamus architecto
                            neque fuga quam voluptate? Quisquam, officiis?
                        </Text>

                        <Text textIndent="2em" my="1rem">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odit nesciunt impedit placeat ipsa architecto!
                            Quibusdam eveniet incidunt est neque delectus,
                            labore eum laboriosam, eius accusantium quaerat
                            eligendi, voluptate repudiandae exercitationem.
                            Culpa doloribus in eveniet! Non delectus, rem
                            asperiores id quam accusantium aut tempora aliquid?
                            Sint sed dolorum non asperiores laborum, mollitia
                            nihil dolores vel quaerat.
                        </Text>

                        <Text textIndent="2em" my="1rem">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Aspernatur voluptas temporibus sit quis
                            accusamus. Dignissimos aliquam explicabo consequatur
                            eos, dolor commodi quidem velit, consequuntur hic
                            earum eius. Illum aliquid laudantium, sapiente
                            exercitationem totam perspiciatis molestias nemo
                            suscipit dolores itaque quidem dolorem harum eaque
                            minus quia autem sint voluptatem? Quae vero quos
                            pariatur beatae minima. Nihil esse debitis ea
                            tempore iure totam cumque odit numquam optio
                            reiciendis recusandae dolores rem asperiores
                            consectetur molestiae sit impedit amet, sunt facere
                            suscipit atque nemo animi id et? Deleniti soluta
                            itaque laboriosam! Suscipit explicabo accusamus
                            eaque beatae quisquam quidem aut expedita odit,
                            quibusdam rerum exercitationem eius nemo tempore
                            vel. Distinctio vitae veritatis at quibusdam dolor,
                            voluptatibus excepturi vero. Reiciendis pariatur
                            repudiandae quibusdam aspernatur, eius sapiente.
                            Aperiam rem ducimus quaerat harum consectetur
                            suscipit cupiditate qui voluptate, magni, nobis eos
                            facilis incidunt impedit, ad sint consequatur
                            repudiandae. Eveniet vel distinctio architecto
                            nostrum facilis amet totam? Harum nesciunt minima
                            cumque esse! At incidunt earum itaque quidem,
                            repellat cupiditate?
                        </Text>
                    </Box>
                </MainContent>
            }
            footer={"Footer"}
        />
    );
}

export default App;
