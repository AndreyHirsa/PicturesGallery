import { IRoute } from 'interfaces/IRoutes';
import React from 'react';
import { Route, Redirect } from 'react-router';
import { useUserState } from 'redux/selectors/stateSelectors';

export const RedirectHomeRoute = ({
    component,
    path,
    exact,
}: IRoute): JSX.Element => {
    const user = useUserState();
    return user ? (
        <Redirect to="/" />
    ) : (
        <Route path={path} exact={exact} component={component} />
    );
};
