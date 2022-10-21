import {Box, Container, Text} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import Headroom from "react-headroom";

export default function Header() {
  return (
    <Headroom style={{zIndex:10}}>
      <Box bg="gray.900" p={4} borderBottom="1px">
        <Container maxW="1360px">
          <Link to="/">
            <Text fontSize="2xl" color="teal.300" px={4} fontWeight="600">Nerdy Waifus</Text>
          </Link>
        </Container>
      </Box>
    </Headroom>
  );
}