import Header from "./components/Header/Header";
import Toolbar from './components/Toolbar/Toolbar'
import Drawer from './components/Drawer/Drawer'
import Footer from './components/Footer/Footer'
import Servis from "./components/Servis/Servis";
import { useState } from "react";
import About from "./components/About/About";
function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  function toggleDrawer() {
    setDrawerOpen(!drawerOpen);
  }
  return (
    <div className="App">
      
        <Toolbar toggleDrawer={toggleDrawer} />
        <Drawer open={drawerOpen} toggle={toggleDrawer} />
        <Header />
        <Servis />
        <About/>
        <Footer/>
    </div>
  );
}

export default App;
