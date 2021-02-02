import "./App.css";
import Hamburger from "./Components/Navbar/Hamburger";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Homepage/Homepage";
import Aboutus from "./Components/Aboutus/Aboutus";
import Nav from "./Components/Navbar/Nav";

function App() {
  return (
    <div className="outer-container" id="outer-container">
      <Router>
        <Nav />
        <Hamburger />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <Switch>
          <Route path="/Aboutus" exact component={Aboutus} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
