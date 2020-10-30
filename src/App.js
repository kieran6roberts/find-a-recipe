import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Browse from "./pages/Browse";
import Recipes from "./pages/Recipes";
import Home from "./pages/Home";
import StorageProvider from "./hooks/StorageContext";

const App = () => {
  return (
    <StorageProvider>
      <Router>
        <Switch>
          <div className="App">
            <Route path="/" component={Home} exact />
            <Route path="/browse" component={Browse} />
            <Route path="/recipes" component={Recipes} />
          </div>
        </Switch>
      </Router>
    </StorageProvider>
  );
}

export default App;
