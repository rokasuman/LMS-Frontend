import React from 'react';
import useForm from '../../../../hooks/useForm.js';
import { postNewAction } from '../../../../feature/books/bookAction.js';

const initialState = {
  year: '',
  title: '',
  author: '',
  imgUI: '',
  isbn: '',
  genre: '',
};

const NewBooksForm = () => {
  const { form, handleOnchange, setForm } = useForm(initialState);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    postNewAction(form)
    console.log(form); 
  };

  return (
    <div className="container my-5 ">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Add New Book</h3>
              <form onSubmit={handleOnSubmit}>
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="year"
                    name="year"
                    placeholder="Year"
                    value={form.year}
                    onChange={handleOnchange}
                    required
                  />
                  <label htmlFor="year">Year</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    placeholder="Title"
                    value={form.title}
                    onChange={handleOnchange}
                    required
                  />
                  <label htmlFor="title">Title</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="author"
                    name="author"
                    placeholder="Author"
                    value={form.author}
                    onChange={handleOnchange}
                    required
                  />
                  <label htmlFor="author">Author</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="imgUI"
                    name="imgUI"
                    placeholder="Image URL"
                    value={form.imgUI}
                    onChange={handleOnchange}
                    required
                  />
                  <label htmlFor="imgUI">Image URL</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="isbn"
                    name="isbn"
                    placeholder="ISBN"
                    value={form.isbn}
                    onChange={handleOnchange}
                    required
                  />
                  <label htmlFor="isbn">ISBN</label>
                </div>

                <div className="form-floating mb-4">
                  <input
                    type="text-area"
                    className="form-control"
                    id="genre"
                    name="genre"
                    placeholder="Genre"
                    value={form.genre}
                    onChange={handleOnchange}
                    required
                  />
                  <label htmlFor="genre">Genre</label>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Add Book
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBooksForm;
