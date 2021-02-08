import {createSelectorHook} from "react-redux";
import {RootState} from "./interfaces/RootStateType";
import React from 'react';
import {Route, Redirect} from 'react-router-dom';

export const PrivateRoute: React.FC<{
    component: React.FC;
    path: string;
    exact: boolean;
}> = (props):JSX.Element => {

    const useSelector = createSelectorHook<RootState>();
    const user = useSelector(state => state.userStateReducer);

    return  user ? (<Route  path={props.path}  exact={props.exact} component={props.component} />) :
        (<Redirect  to="/login"  />);
};