import MainFooter from "./components/layouts/MainFooter";
import MainNavigation from "./components/layouts/MainNavigation";
import { Route, Switch, Redirect } from "react-router-dom";
import Main from "./components/Main/Main";

function App() {
  return (
    <>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/menu">
          <h1>Menu page</h1>
        </Route>
        <Route path="/takeout-order">
          <h1>Online order page</h1>
        </Route>
        <Route path="/login">
          <h1>Member login</h1>
        </Route>
      </Switch>
      <MainFooter />
    </>
  );
}

export default App;
