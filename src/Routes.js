import Home from "./pages/Home";
import Funcionario from "./pages/Funcionario";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/funcionarios">
          <Funcionario />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
