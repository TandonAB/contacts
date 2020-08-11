import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './constants/store';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DetailContact from './components/DetailContact';

const Root = () => {
  return (
    <Router>
      <Route exact path="/" component={App} />
      <Route path="/contacts/:id" component={DetailContact} />
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

