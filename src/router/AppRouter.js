import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CreateBook from '../components/CreateBook';
import BooksList from '../components/BooksList';
import useLocalStorage from '../hooks/useLocalStorage';
import EditBook from '../components/EditBook';

const AppRouter = () => {
  const [books, setBooks] = useLocalStorage('books', []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Switch>
            <Route
              render={(props) => <BooksList {...props} books={books} setBooks={setBooks} />}
              path="/"
              exact={true}
            />
            {/*Using "render props" to pass the default props passed byReact router along with the "books" and "setBooks"*/}
            <Route render={(props) => <CreateBook {...props} books={books} setBooks={setBooks} />} path="/add" />
            <Route render={(props) => <EditBook {...props} books={books} setBooks={setBooks} />} path="/edit/:id" />

            <Route component={() => <Redirect to="/" />} />
          </Switch>
        </div>
      </div>

      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
