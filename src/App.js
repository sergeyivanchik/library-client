import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector } from  'react-redux';

import './App.scss';

import CurrentBook from './components/CurrentBook';
import CurrentAuthor from './components/CurrentAuthor';
import MainPage from './components/MainPage';
import Header from './components/Header';
import Form from './components/Form';
import PrivateRoute from './configs/PrivateRoute';


const App = () => {
  const isShowSpinner = useSelector(store => store.spinner.show);
  const isShowLoginForm = useSelector(store => store.forms.showLoginForm);
  const isShowSignupForm = useSelector(store => store.forms.showSignupForm);

  return (
    <Router>
      <div className="container">
        {
          !isShowSpinner && <Header/>
        }

        <div className="container__routes">
          <Switch>
            <Route exact path='/' component={MainPage}/>
            <PrivateRoute path="/book/:bookId" component={CurrentBook}/>
            <PrivateRoute path="/author/:authorId" component={CurrentAuthor}/>
          </Switch>
        </div>

        <Form isShowLoginForm={isShowLoginForm} isShowSignupForm={isShowSignupForm}/>
      </div>
    </Router>
  );
}

export default App;
