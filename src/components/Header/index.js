import {Box, Container, HStack, IconButton, Input, Text, useMediaQuery} from "@chakra-ui/react";
import {Link, useNavigate} from "react-router-dom";
import Headroom from "react-headroom";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {getSearchResults} from "../../store/languages/actions";
import {GoSearch} from "react-icons/go";
import {IoIosArrowUp} from "react-icons/io";

export default function Header() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const [lessThan690] = useMediaQuery(`(max-width: 690px)`);

  function search(e) {
    e.preventDefault();
    dispatch(getSearchResults(query));
    navigate(`/search/${query}`);
    setQuery("");
  }

  return (
    <Headroom style={{zIndex: 10}}>
      <Box bg="gray.900" p={4} borderBottom="1px">
        <Container maxW="1360px">
          <HStack justify="space-between">
            <Link to="/">
              <Text fontSize="2xl" color="teal.300" px={4} fontWeight="600">Nerdy Waifus</Text>
            </Link>
            <form onSubmit={search}>
              {
                lessThan690 ? (
                  <IconButton
                    aria-label={"search"}
                    icon={expanded ? <IoIosArrowUp /> : <GoSearch/>}
                    colorScheme="teal"
                    borderColor="transparent"
                    variant="outline"
                    _hover={{backgroundColor: "gray.800"}}
                    _active={{backgroundColor: "gray.700"}}
                    onClick={() => setExpanded(!expanded)}
                  />
                ) : (
                  <Input
                    width="sm"
                    variant="filled"
                    color="gray.200"
                    placeholder="Search anything..."
                    backgroundColor="gray.800"
                    focusBorderColor="teal.600"
                    _hover={{backgroundColor: "gray.700"}}
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                  />
                )
              }
            </form>
          </HStack>
          {
            expanded && lessThan690 && (
              <form onSubmit={search}>
                <br/>
                <Input
                  width="sm"
                  variant="filled"
                  color="gray.200"
                  placeholder="Search anything..."
                  backgroundColor="gray.800"
                  focusBorderColor="teal.600"
                  _hover={{backgroundColor: "gray.700"}}
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                />
              </form>
            )
          }
        </Container>
      </Box>
    </Headroom>
  );
}