import { ImageProps, Image as Img, Skeleton } from "@chakra-ui/react";

function Image(props: ImageProps) {
    const _ = { ...props, fallback: <Skeleton h="100%" w="100%" /> };
    return <Img {..._}></Img>;
}

export default Image;
