import {DrawingApp} from "pages/DrawingApp";
import {LogInForm} from "pages/logInForm";
import {SignUpForm} from "pages/signUpform";
import React, {useEffect,useState} from "react";
import {Route, Switch} from "react-router";
import {HeaderNavigation} from "./components/headerNavigation";
import {useSelector} from "react-redux";
import {Gallery} from "./pages/Gallery/Gallery";


const App: React.FC = () => {

    return (
        <div className="App">
            <HeaderNavigation/>
            <Switch>
                <Route exact path="/login" component={LogInForm}/>
                <Route exact path="/signup" component={SignUpForm}/>
                <Route exact path="/start_drawing" component={DrawingApp}/>
                <Route exact path="/gallery" component={Gallery}/>
            </Switch>
        </div>
    );
};

export default App;
