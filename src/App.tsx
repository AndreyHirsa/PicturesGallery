import React from 'react';
import { Route, Switch } from 'react-router';
import { DrawingApp } from 'pages/DrawingApp';
import { LogInForm } from 'pages/LogInForm';
import { SignUpForm } from 'pages/SignUpform';
import { Gallery } from 'pages/Gallery';
import { HeaderNavigation } from './components/headerNavigation';
import { PrivateRoute } from 'routers/PrivateRoute';
import { RedirectHomeRoute } from 'routers/RedirectHomeRoute';

const App: React.FC = () => (
    <div className="App">
        <HeaderNavigation />
        <Switch>
            <RedirectHomeRoute exact path="/login" component={LogInForm} />
            <Route exact path="/signup" component={SignUpForm} />
            <PrivateRoute exact path="/start_drawing" component={DrawingApp} />
            <PrivateRoute exact path="/gallery" component={Gallery} />
        </Switch>
    </div>
);

export default App;
