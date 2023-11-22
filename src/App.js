import { Outlet } from "react-router-dom";
import Banner from "./Components/Banner";


function App() {
  return (
    <>
      <Banner/>
      <Outlet/>
    </>
  );
}

export default App;
