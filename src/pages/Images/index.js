import {Box, Center, HStack, Image, Progress, Skeleton, Text, Wrap, WrapItem} from "@chakra-ui/react";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getImages} from "../../store/languages/actions";

export default function Images() {
  const {language} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImages(language));
  }, [dispatch, language]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = language;
  }, []);

  const {images, fetchingImages} = useSelector(state => state.languages);

  return <ImageGrid images={images} loadingState={fetchingImages} title={language}/>;
}

export function ImageGrid({title: language, images, loadingState: fetchingImages}) {
  return (
    <Box p={4}>
      <Center>
        <HStack align="end">
          <Text color="gray.200" fontSize="5xl" fontWeight="800">
            {language}
          </Text>
          <Text color="teal.200" fontSize="sm" fontWeight="800">
            {`(${images.length})`}
          </Text>
        </HStack>
      </Center>
      <br/>
      <br/>
      <Wrap spacing={10} justify="center">
        {
          fetchingImages ? [1, 2, 3, 4, 5, 6].map((n) => (
            <Skeleton width="md" height="md" key={n}/>
          )) : images.map((image, i) => {
            return (
              <WrapItem key={i}>
                <Image
                  src={image?.link}
                  objectFit="cover"
                  width="lg"
                  height="lg"
                  rounded="md"
                  cursor="pointer"
                  _hover={{opacity: 0.4}}
                  onClick={() => window.open(image?.link, "_blank")}
                />
              </WrapItem>
            );
          })
        }
      </Wrap>
    </Box>
  );
}