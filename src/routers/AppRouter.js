import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboradPage from './../components/DashboardPage';
import AddPage from './../components/AddPage';
import EditPage from './../components/EditPage';

import NotFoundPage from './../components/NotFoundPage';
import LoginPage from './../components/LoginPage';
import CreateOwnRoute from './CreateOwnRoute';
import CreatePublicRoute from './CreatePublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>

            <Switch>
                <CreatePublicRoute path="/" component={LoginPage} exact={true} />
                <CreateOwnRoute path="/dashboard" component={DashboradPage} />
                <CreateOwnRoute path="/create" component={AddPage} />
                <CreateOwnRoute path="/edit/:id" component={EditPage} />
                <Route component={NotFoundPage} />
            </Switch>

        </div>

    </Router>
);
export default AppRouter;