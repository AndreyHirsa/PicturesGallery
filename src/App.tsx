import { LogInForm } from "pages/logInForm";
import { SignUpForm } from "pages/signUpform";
import React from "react";
import { Route, Switch } from "react-router";
import { HeaderNavigation } from "./components/headerNavigation";


const App: React.FC = () => {
  return (
    <div className='App'>
      <HeaderNavigation />
      <Switch>
        <Route exact path='/login' component={LogInForm} />
        <Route exact path='/signup' component={SignUpForm} />
      </Switch>
    </div>
  );
};

export default App;
