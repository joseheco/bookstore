import React, { useEffect } from 'react';
import Book from './Book';
import { useSelector, useDispatch } from 'react-redux';
import { loadBooksApi } from '../redux/books/books';


const BookPage = () => {
  const myBooks = useSelector(store => store.booksReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadBooksApi());
  }, [dispatch]);
  return (
    <div>
      {myBooks.map((book) => ( 
        <Book 
        key={book.item_id}
        item_id={book.item_id}
        title={book.title}
        author={book.author}
        category={book.category} />))}
    </div>
  );
}

export default BookPage;