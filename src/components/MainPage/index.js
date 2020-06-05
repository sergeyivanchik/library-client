import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './index.scss';

import BookCardList from '../BookCardList';
import BooksPagination from '../BooksPagination';
import Spinner from '../Spinner';

import { getBooksAsync } from '../../store/actions/books';


const MainPage = ({ books, getBooksAsync, showSpinner }) => {
  useEffect(() => {
    getBooksAsync();
  }, [getBooksAsync]);

  return (
    <div className="main-page">
      {
        showSpinner
          ? <Spinner/>
          : <>
              <BookCardList books={books}/>
              <BooksPagination/>
            </>
      }
    </div>
  );
}

const mapStateToProps = store => ({
  books: store.books.bookList,
  showSpinner: store.spinner.show
});

const mapDispatchToProps = {
  getBooksAsync
};

// const mapDispatchToProps = dispatch => ({
//   getAllBooks() {
//     return dispatch(getBooksAsync())
//   },
//   getAllAuthors() {
//     return dispatch(getAuthorsAsync())
//   }
// });

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
