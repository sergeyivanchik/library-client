import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useSelector } from  'react-redux';

import './App.scss';

import CurrentBook from './components/CurrentBook';
import CurrentAuthor from './components/CurrentAuthor';
import MainPage from './components/MainPage';
import Header from './components/Header';


const App = () => {
  const isShowSpinner = useSelector(store => store.spinner.show);

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
      </div>
    </Router>
  );
}

export default App;
