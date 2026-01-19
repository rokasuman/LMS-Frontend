import React from 'react';
import { useDispatch } from 'react-redux';
import useForm from '../../../../hooks/useForm.js';
import { postNewAction } from '../../../../feature/books/bookAction.js';
import { useParams } from 'react-router-dom';

const initialState = {
  year: '',
  title: '',
  author: '',
  imgUI: '',
  isbn: '',
  genre: '',
};

const EditBooksForm = () => {
  //usig the paramhook to get the id 
  const {_id} = useParams()
  console.log(_id)
  const dispatch = useDispatch();
  const { form, handleOnchange } = useForm(initialState);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(postNewAction(form)).unwrap();
      console.log('Book added:', form);
    } catch (error) {
      console.error('Failed to add book:', error);
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-5">
              <h3 className="card-title text-center mb-4 fw-bold ">
                Insert the details of the book
              </h3>

              <form onSubmit={handleOnSubmit}>
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control rounded-3"
                    id="year"
                    name="year"
                    value={form.year}
                    onChange={handleOnchange}
                    required
                  />
                  <label htmlFor="year">Year</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control rounded-3"
                    id="title"
                    name="title"
                    value={form.title}
                    onChange={handleOnchange}
                    required
                  />
                  <label htmlFor="title">Title</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control rounded-3"
                    id="author"
                    name="author"
                    value={form.author}
                    onChange={handleOnchange}
                    required
                  />
                  <label htmlFor="author">Author</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control rounded-3"
                    id="imgUI"
                    name="imgUI"
                    value={form.imgUI}
                    onChange={handleOnchange}
                    required
                  />
                  <label htmlFor="imgUI">Image URL</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control rounded-3"
                    id="isbn"
                    name="isbn"
                    value={form.isbn}
                    onChange={handleOnchange}
                    required
                  />
                  <label htmlFor="isbn">ISBN</label>
                </div>

                <div className="form-floating mb-4">
                  <textarea
                    className="form-control rounded-3"
                    id="genre"
                    name="genre"
                    value={form.genre}
                    onChange={handleOnchange}
                    required
                    style={{ height: '100px' }}
                  />
                  <label htmlFor="genre">Genre</label>
                </div>

                <button
                  type="submit"
                  className="btn w-100 py-2 fw-bold"
                  style={{
                    background: 'linear-gradient(90deg, #151519ff, #535465ff)',
                    color: '#fff',
                    border: 'none',
                  }}
                >
                  Save Book
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBooksForm;
