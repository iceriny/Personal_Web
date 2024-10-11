import { Flex, Box, useBreakpointValue } from "@chakra-ui/react";
import MotionImage from "../MotionImage/MotionImage";
import { useCallback, useEffect, useRef, useState } from "react";

interface Props {
    img: { src: string; alt?: string }[];
}
function MasonryGallery({ img }: Props) {
    // 根据断点调整列数
    const columns = useBreakpointValue({ base: 1, sm: 2, md: 3, lg: 4 });
    const ref = useRef(null);
    const [columnWidth, setColumnWidth] = useState(0);
    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
    }, []);
    const calculateColumnWidth = () => {
        if (ref.current && columns) {
            const width = ref.current.getBoundingClientRect().width;
            return width / columns;
        } else return 0;
    };

    const calculateColumnWidthCallback = useCallback(calculateColumnWidth, [
        columns,
    ]);
    useEffect(() => {
        setColumnWidth(calculateColumnWidthCallback());
    }, [calculateColumnWidthCallback]);

    const handleWindowResize = () => {
        calculateColumnWidth();
    };

    return (
        <Flex ref={ref} maxW="900px" direction="column">
            {img.map((img, index) => (
                <Box
                    key={index}
                    overflow="hidden"
                    borderRadius="md"
                    width={columnWidth}
                >
                    <MotionImage
                        src={img.src}
                        alt={img.alt}
                        width="100%"
                        height="auto"
                        objectFit="cover"
                        whileHover={{ scale: 1.5 }}
                    />
                </Box>
            ))}
        </Flex>
    );
}

export default MasonryGallery;
