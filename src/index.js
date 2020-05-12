import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import { firebase } from './firebase/firebase';
import { login, logout } from './actions/authentication';
import configureStore from './store/configure-store';
import { startSetExpenses } from './actions/expenses';


const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRenderd = false;
const renderApp = () => {
    if (!hasRenderd) {
        ReactDOM.render(jsx, document.getElementById('root'));
        hasRenderd = true;
    }
};

ReactDOM.render(<p>Loading..</p>, document.getElementById('root'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }
        });
    }
    else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});