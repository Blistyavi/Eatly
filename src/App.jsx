import Menu from "./components/Menu/Menu";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home-v1/Home";
import Download from "./components/Download/Download";
import Top from "./components/Our Top Restaurants/Top";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Menu />
        <Home />
        <Download />
        <Top />
      </div>
    </>
  );
}

export default App;
