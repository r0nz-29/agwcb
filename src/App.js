import Languages from "./pages/Home/Languages";
import "./App.css";
import Header from "./components/Header";
import {useEffect} from "react";
import Introduction from "./pages/Home/Introduction";
import {Container} from "@chakra-ui/react";
import {Route, Routes} from "react-router-dom";
import Images from "./pages/Images";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "#171923";
  }, []);

  return (
    <div>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:language" element={<Images />} />
      </Routes>
      <br/>
      <Footer />
    </div>
  );
}

function Home() {
  return (
    <Container maxWidth="1360px">
      <Introduction/>
      <br/>
      <br/>
      <Languages/>
    </Container>
  )
}

export default App;
