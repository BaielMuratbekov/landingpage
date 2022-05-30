import { useState } from "react";
import Drawer from "./components/Drawer/Drawer";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Toolbar from "./components/Toolbar/Toolbar";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  function toggleDrawer() {
    setDrawerOpen(!drawerOpen);
  }
  return (
    <div className="App">
      <Toolbar toggleDrawer={toggleDrawer}/>
      <Drawer open={drawerOpen} toggle={toggleDrawer} />
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;
