import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Browse from "./pages/Browse";
import Recipes from "./pages/Recipes";
import Home from "./pages/Home";

const App = () => {
  return (
  <div className="App">
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/browse" component={Browse} />
        <Route path="/recipes" component={Recipes} />
      </Switch>
    </Router>
  </div>
  );
}

export default App;
