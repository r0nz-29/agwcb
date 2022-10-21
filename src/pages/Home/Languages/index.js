import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getLangs} from "../../../store/languages/actions";
import {Box, Image, Progress, Skeleton, Text, Wrap} from "@chakra-ui/react";
import {Link} from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLangs());
  }, []);

  const {languages, processing} = useSelector(state => state.languages);

  return (
    <>
      <Text px={4} color="gray.400" fontSize="2xl" mb={4} width="sm">
        Available Languages
      </Text>
          <Wrap spacing={8} justify="center" align="center" px={4} pb={8}>
            {
              processing ? [1, 2, 3, 4, 5].map((n) => (
                  <Skeleton width="3xs" height="3xs" key={n} rounded="md" />
                )) : languages?.map((lang, i) => {
              return (
                <Box
                  key={i}
                  boxShadow="dark-lg"
                  rounded="md"
                  bg="gray.800"
                  cursor="pointer"
                  position="relative"
                >
                  <Link to={`/${lang?.name}`}>
                    <Image objectFit="cover" src={lang?.cover?.link} alt={lang?.name} boxSize="3xs" rounded="md"/>
                    <Text
                      fontSize="lg"
                      fontWeight="600"
                      color="gray.100"
                      m={4}
                      position="absolute"
                      bottom={0}
                      zIndex={1}
                    >
                      {lang?.name}
                    </Text>
                    <Box
                      position="absolute"
                      bottom={0}
                      width="100%"
                      height="100%"
                      rounded="md"
                      bgGradient="linear(to-t, gray.900, rgba(0, 0, 0, 0.4))"
                      _hover={{
                        bgGradient: "linear(to-t, gray.800, rgba(0, 0, 0, 0.1))"
                      }}
                    >
                    </Box>
                  </Link>
                </Box>
              );
            })
            }
          </Wrap>
        )
      }
    </>
  );
}