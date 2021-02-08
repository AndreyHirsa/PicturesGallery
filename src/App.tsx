import React from 'react';
import { Route, Switch } from 'react-router';
import { DrawingApp } from 'pages/drawingApp';
import { LogInForm } from 'pages/logInForm';
import { SignUpForm } from 'pages/signUpform';
import { Gallery } from 'pages/gallery';
import { HeaderNavigation } from './components/headerNavigation';
import {PrivateRoute} from "./PrivateRoute";

const App: React.FC = () => (
    <div className="App">
        <HeaderNavigation />
        <Switch>
            <Route exact path="/login" component={LogInForm} />
            <Route exact path="/signup" component={SignUpForm} />
            <PrivateRoute exact path="/start_drawing" component={DrawingApp} />
            <PrivateRoute exact path="/gallery" component={Gallery} />
        </Switch>
    </div>
);

export default App;
