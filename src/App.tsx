import {DrawingApp} from "pages/drawingApp";
import {LogInForm} from "pages/logInForm";
import {SignUpForm} from "pages/signUpform";
import React from "react";
import {Route, Switch} from "react-router";
import {HeaderNavigation} from "./components/headerNavigation";
import {Gallery} from "pages/gallery";

const App: React.FC = () => {

    return (
        <div className='App'>
            <HeaderNavigation/>
            <Switch>
                <Route exact path='/login' component={LogInForm}/>
                <Route exact path='/signup' component={SignUpForm}/>
                <Route exact path='/start_drawing' component={DrawingApp}/>
                <Route exact path='/gallery' component={Gallery}/>
            </Switch>
        </div>
    );
};

export default App;
