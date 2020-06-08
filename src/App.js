import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useSelector, useDispatch } from  'react-redux';

import './App.scss';

import CurrentBook from './components/CurrentBook';
import CurrentAuthor from './components/CurrentAuthor';
import MainPage from './components/MainPage';
import Header from './components/Header';
import Form from './components/Form';

import { checkAuthorizationAsync } from './store/actions/users';


const App = () => {
  const dispatch = useDispatch();
  const isShowSpinner = useSelector(store => store.spinner.show);
  const isShowLoginForm = useSelector(store => store.forms.showLoginForm);
  const isShowSignupForm = useSelector(store => store.forms.showSignupForm);

  useEffect(() => {
    dispatch(checkAuthorizationAsync());
  });

  return (
    <Router>
      <div className="container">
        {
          !isShowSpinner && <Header/>
        }

        <div className="container__routes">
          <Route exact path='/' component={MainPage}/>
          <Route path="/book/:bookId" component={CurrentBook}/>
          <Route path="/author/:authorId" component={CurrentAuthor}/>
        </div>

        <Form isShowLoginForm={isShowLoginForm} isShowSignupForm={isShowSignupForm}/>
      </div>
    </Router>
  );
}

export default App;
