import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Browse from "./pages/Browse/Browse";
import Recipes from "./pages/Recipes/Recipes";
import Home from "./pages/Home/Home";
import StorageProvider from "./hooks/StorageContext";
import ButtonProvider from "./hooks/ButtonContext";

const App = () => {
  return (
    <StorageProvider>
      <ButtonProvider>
        <Router>
          <Switch>
            <div className="App">
              <Route path="/" component={Home} exact />
              <Route path="/browse" component={Browse} />
              <Route path="/recipes" component={Recipes} />
            </div>
          </Switch>
        </Router>
      </ButtonProvider>
    </StorageProvider>
  );
}

export default App;
