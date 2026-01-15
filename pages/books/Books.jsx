import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookTabel from '../../src/component/tables/BookTabel.jsx';
import { AdminFetchAllBooksAction } from '../../feature/books/bookAction.js';
import { useNavigate } from 'react-router-dom';

const Books = () => {
  const navigate = useNavigate()

  const handleAddBook =(e)=>{
    e.preventDefault();
    navigate("/user/new-books")
  }
  const dispatch = useDispatch();
  const books = useSelector(state => state.book.book); 

  useEffect(() => {
    dispatch(AdminFetchAllBooksAction());
  }, [dispatch]);

  return (
    <div className='p-2'>
      <h3>Books</h3>
      <hr/>
      <div className='text-end'>
        <button className='bg-dark text-white border rounded-2 py-2 px-2'onClick={handleAddBook}>
          Add New Book
        </button>
      </div>

      <div className='mt-4'>
        <BookTabel books={books} />
      </div>
    </div>
  );
};

export default Books;
