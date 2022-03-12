import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducer as form } from 'redux-form';
import { Routes, Route , BrowserRouter as Router} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import {
  connectRouter,
  routerMiddleware
} from 'connected-react-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
// Import your reducers and routes here
import tagRoutes from './routes/tag';
import tag from './reducers/tag';
import HelloWorld  from './components/HelloWorld';
import { LoginForm } from './components/LoginForm';
import { TextAxios } from './components/TestAxios';

const history = createBrowserHistory();
const store = createStore(
  combineReducers({
    router: connectRouter(history),
    form,
    tag
  }),
  applyMiddleware(routerMiddleware(history), thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Routes>
      <Route path="/hello" element={<HelloWorld/>} strict={true} exact={true}/>
      <Route path="/login" element={<LoginForm/>} strict={true} exact={true}/>
      <Route path="/axios" element={<TextAxios/>} strict={true} exact={true}/>
      <Route path="/" element={<App/>} strict={true} exact={true}/>
        {tagRoutes}
        <Route render={() => <h1>Not Found</h1>} />
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
