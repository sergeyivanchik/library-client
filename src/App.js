import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useSelector, useDispatch } from  'react-redux';

import './App.scss';

import CurrentBook from './components/CurrentBook';
import CurrentAuthor from './components/CurrentAuthor';
import MainPage from './components/MainPage';
import Header from './components/Header';
import Form from './components/Form';
import Error from './components/Error';

import { checkAuthorizationAsync } from './store/actions/users';

import { sendToServer } from './configs/socket';


const App = () => {
  const dispatch = useDispatch();
  const isShowSpinner = useSelector(store => store.spinner.show);
  const isShowLoginForm = useSelector(store => store.forms.showLoginForm);
  const isShowSignupForm = useSelector(store => store.forms.showSignupForm);

  const isAuthorized = localStorage.getItem('token') !== null ? true : false;

  useEffect(() => {
    dispatch(checkAuthorizationAsync());
  });

  useEffect(() => {
    sendToServer({number: 123})
  }, []);

  return (
    <Router>
      <div className="container">
        {
          !isShowSpinner && <Header/>
        }

        <div className="container__routes">
          <Route exact path='/' component={MainPage }/>
          <Route path="/book/:bookId" component={isAuthorized ? CurrentBook : Error}/>
          <Route path="/author/:authorId" component={isAuthorized ? CurrentAuthor : Error}/>
        </div>

        <Form isShowLoginForm={isShowLoginForm} isShowSignupForm={isShowSignupForm}/>
      </div>
    </Router>
  );
}

export default App;
