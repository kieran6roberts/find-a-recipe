import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Browse from "./pages/Browse";
import Recipes from "./pages/Recipes";

const App = () => {
  return (
  <div className="App">
    <Router>
      <Switch>
        <Route path="/browse" exact>
          <Browse />
        </Route>
        <Route path="/recipes" exact>
          <Recipes />
        </Route>
        <Route path="/">
          <Recipes />
        </Route>
      </Switch>
    </Router>
  </div>
  );
}

export default App;
