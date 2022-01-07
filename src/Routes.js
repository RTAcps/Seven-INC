import Home from "./pages/Home";
import Employee from "./pages/Employee";
import FormAdd from "./components/FormAdd";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function link(ev) {
  const { value } = ev.target;
  const id = value;
  const baseUrl = "https://localhost:PORTA_API/";

  fetch(`${baseUrl}/employee/${id}`);
}

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}>
          <Home />
        </Route>
        <Route path="/employee" component={Employee}>
          <Employee />
        </Route>
        <Route path={link} component={FormAdd}>
          <FormAdd />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
