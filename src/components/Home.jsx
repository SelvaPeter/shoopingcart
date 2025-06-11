import { useState } from "react";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>

      <Body searchQuery={searchQuery}/>

      <Footer />
    </>
  );
};
export default Home;
