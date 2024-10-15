import React from "react";
import { Flex, useBreakpointValue } from "@chakra-ui/react";
import Image from "../Image/Image";

// import { Variants } from "framer-motion";
import { motion } from "framer-motion";
// import Overlay from "../Overlay/Overlay";

interface Props {
    images: string[];
    p?: number;
    gap?: number;
}

function MasonryGallery({ images, p, gap }: Props) {
    // 根据断点调整列数
    const columns = useBreakpointValue({ base: 1, sm: 2, md: 3, lg: 4 });
    const getColumnsContainer = (imgs: React.ReactNode[], key: string) => {
        return (
            <Flex key={key} direction="column" justifyContent="center">
                {imgs}
            </Flex>
        );
    };
    const [
        currentImage,
        // setCurrentImage
    ] = React.useState("");

    const imageVariants = {
        initial: { opacity: 0 },
        visible: { opacity: 1 },
        isCurrentImage: { opacity: 1, size: 1.2 },
    };
    const getImageVariants = (groupIndex: number, imageIndex: number) => {
        if (`${groupIndex}-${imageIndex}` === currentImage)
            return "isCurrentImage";
        else return "visible";
    };
    const getImages = (imgs: string[], groupIndex: number = -1) => {
        const imagesNode: React.ReactNode[] = [];

        for (let i = 0; i < imgs.length; i++) {
            // const onClick = () => {
            //     setCurrentImage(`${groupIndex}-${i}`);
            // };
            imagesNode.push(
                <motion.div
                    key={`MasonryImage_${i}`}
                    whileHover={{ scale: 1.05, zIndex: 1 }}
                    transition={{
                        type: "spring",
                        duration: 1,
                    }}
                    initial="initial"
                    // animate={getImageVariants()}
                    variants={imageVariants}
                    whileInView={getImageVariants(groupIndex, i)}
                    // onClick={onClick}
                >
                    <Image
                        src={imgs[i]}
                        alt={`Image ${i}`}
                        p={gap}
                        borderRadius="3xl"
                    />
                </motion.div>
            );
        }
        return imagesNode;
    };
    const getColumns = () => {
        if (!columns) return [];
        const imagesGroup: string[][] = [];
        for (let i = 0; i < columns; i++) {
            imagesGroup.push([]);
        }
        images.forEach((_, index) => {
            imagesGroup[index % columns].push(_);
        });

        const cols: React.ReactNode[] = imagesGroup.map((group, index) =>
            getColumnsContainer(
                getImages(group, index),
                `MasonryGroup_${index}`
            )
        );
        return cols;
    };
    return (
        <>
            <Flex
                direction="row"
                justify="center"
                align="center"
                alignItems="flex-start"
                p={p}
            >
                {getColumns()}
            </Flex>
            {/* <Overlay
                displayed={currentImage !== ""}
                maxBlur={7}
                onClick={() => setCurrentImage("")}
            /> */}
        </>
    );
}

export default MasonryGallery;
