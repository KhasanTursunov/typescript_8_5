import {  Routes, Route } from 'react-router-dom';
import Books from './books/Books';
import CreateBook from './CreateBook/CreateBook';
import Home from './home/Home';
import Layout from './layout/Layout';

const MainRouter = () => {
  return (
   
        <Routes>
         <Route path="/" element={<Layout />} >
         <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/create-book" element={<CreateBook />} />
         </Route>
        </Routes>

  );
};

export default MainRouter;
