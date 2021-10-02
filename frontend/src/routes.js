import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import PainelControle from "./pages/PainelControle";
import Insumos from "./pages/Insumos";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/PainelControle" component={PainelControle} />
      <Route path="/ConsultarProdutor" component={PainelControle} />
      <Route path="/Insumos" component={Insumos} />
    </Switch>
  </BrowserRouter>
);


export default Routes;
