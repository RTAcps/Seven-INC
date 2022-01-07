import Home from "./pages/Home";
import Employee from "./pages/Employee";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/employee">
          <Employee />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
