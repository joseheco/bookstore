import React from 'react';
import Book from './Book';
import { useSelector } from 'react-redux';

const BookPage = () => {
  const myBooks = useSelector(store => store.booksReducer);
  return (
    <div>
      {myBooks.map((book) => ( 
        <Book 
        key={book.id}
        id={book.id}
        title={book.title}
        author={book.author}
        category={book.category} />))}
    </div>
  );
}

export default BookPage;
