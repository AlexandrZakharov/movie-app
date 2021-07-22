import "./App.css";
import Home from "./pages/Home/HomeContainer";

import { Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Route path="/" exact>
        <Home />
      </Route>
    </div>
  );
};

export default App;
