import React from 'react';
import { Route, Switch } from 'react-router';
import { DrawingApp } from 'pages/DrawingApp';
import { LogInForm } from 'pages/logInForm';
import { SignUpForm } from 'pages/signUpform';
import { Gallery } from 'pages/Gallery';
import { HeaderNavigation } from './components/headerNavigation';

const App: React.FC = () => (
    <div className="App">
        <HeaderNavigation />
        <Switch>
            <Route exact path="/login" component={LogInForm} />
            <Route exact path="/signup" component={SignUpForm} />
            <Route exact path="/start_drawing" component={DrawingApp} />
            <Route exact path="/gallery" component={Gallery} />
        </Switch>
    </div>
);

export default App;
