import {Button, Flex, Image, Skeleton, Spacer, Stack, Text, VStack} from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getRandom} from "../../../store/languages/actions";
import {AiFillApi} from "react-icons/ai";

export default function Introduction() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRandom());
  }, []);

  const {randomImage, processing} = useSelector(state => state.languages);
  return (
    // xs sm md lg xl
    <Stack direction={["column-reverse", "column-reverse", "column-reverse", "row"]} justify="space-between"
           align="center" p={4}>
      <VStack align="start">
        <Text
          fontSize="6xl"
          textShadow="md"
          bgGradient="linear(to-r, gray.300, teal.500)"
          bgClip="text"
          fontWeight="extrabold"
        >
          Nerdy Waifus
        </Text>
        <Text color="gray.300" fontSize="xl">
          Browse images of anime waifus holding your treasured programming books
        </Text>
        <br/>
        <br/>
        <Button
          size="lg"
          colorScheme="teal"
          color="gray.900"
          rightIcon={<AiFillApi/>}
          onClick={() => window.open(process.env.REACT_APP_BASE_URL, "_blank")}
        >
          Check out the api
        </Button>
      </VStack>
      <Spacer/>
      {
        processing ? (
          <Skeleton>
            <Image src={randomImage?.link} objectFit="cover" height="md" rounded="md"/>
          </Skeleton>
        ) : (
          <Image
            src={randomImage?.link}
            objectFit="cover"
            height="md"
            rounded="md"
            cursor="pointer"
            _hover={{opacity: 0.4}}
            onClick={() => window.open(randomImage?.link, "_blank")}
          />
        )
      }
    </Stack>
  );
}