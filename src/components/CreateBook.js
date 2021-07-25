import React from 'react';
import BookForm from './BookForm';

const CreateBook = ({ history, books, setBooks }) => {
  const handleOnSubmit = (book) => {
    setBooks([book, ...books]);
    //This will redirect the user to the main page
    history.push('/');
  };

  return (
    <React.Fragment>
      <BookForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default CreateBook;
