import { IRoute } from 'interfaces/IRoutes';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useUserState } from 'redux/selectors/stateSelectors';

export const PrivateRoute = ({
    component,
    path,
    exact,
}: IRoute): JSX.Element => {
    const user = useUserState();

    return user ? (
        <Route path={path} exact={exact} component={component} />
    ) : (
        <Redirect to="/login" />
    );
};
