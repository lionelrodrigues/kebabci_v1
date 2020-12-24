import "./App.css";
import Hamburger from "./Components/Navbar/Hamburger";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Homepage/Homepage";
import Bulkmenu from "./Components/Bulkmenu/Bulkmenu";

function App() {
  return (
    <div className="outer-container" id="outer-container">
      <Router>
        <Hamburger />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <Switch>
          <Route path="/bulk-order" exact component={Bulkmenu} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
