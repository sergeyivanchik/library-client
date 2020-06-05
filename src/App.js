import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useDispatch } from  'react-redux';

import CurrentBook from './components/CurrentBook';
import CurrentAuthor from './components/CurrentAuthor';
import MainPage from './components/MainPage';

import { logInAsync, checkAuthorizationAsync } from './store/actions/users';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');

    token
      ? dispatch(checkAuthorizationAsync())
      : dispatch(logInAsync({ username: 'Admin', password: '9874123' }));
  }, [dispatch]);

  return (
    <Router>
      <div className="router">
        <Route exact path='/' component={MainPage}/>
        <Route path="/book/:bookId" component={CurrentBook}/>
        <Route path="/author/:authorId" component={CurrentAuthor}/>
      </div>
    </Router>
  );
}

export default App;
