import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import PainelControle from "./pages/PainelControle";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/PainelControle" component={PainelControle} />
      <Route path="/ConsultarProdutor" component={PainelControle} />
    </Switch>
  </BrowserRouter>
);


export default Routes;
