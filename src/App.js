import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

import { useMediaQuery } from "react-responsive";
import Body from "./components/Body";
import CartList from "./components/CartList";

function App() {
  const isBigScreen = useMediaQuery({ query: "(min-width:1824px)" });
  const isLaptoporDesktop = useMediaQuery({ query: "(min-width:1224px)" });
  const isTabletorMobile = useMediaQuery({ query: "(max-width:1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation:portrait)" });

  const appBar = {
    backgroundColor: "#ddd6d6",
    padding: "10px",
    borderRadius: "5px",
    fontSize: "20px",
    boxShadow: "inset 0px 1px 7px 1px #5900ff",
  };
  const mainContent = {
    backgroundColor: "#ddd6d6",
    boxShadow: "1px 1px 12px 0px",
    padding: "10px",
    borderRadius: "10px",
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Body"
          element={
            <Body
              isBigScreen={isBigScreen}
              isLaptoporDesktop={isLaptoporDesktop}
              isTabletorMobile={isTabletorMobile}
              isPortrait={isPortrait}
              appBar={appBar}
              mainContent={mainContent}
            />
          }
        />

        <Route
          path="/CartList"
          element={
            <CartList
              isBigScreen={isBigScreen}
              isLaptoporDesktop={isLaptoporDesktop}
              isTabletorMobile={isTabletorMobile}
              isPortrait={isPortrait}
            />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
