import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BookTabel = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const { data } = await axios.get("http://localhost:8000/api/books");
        setBooks(data); 
      } catch (error) {
        console.error("Failed to fetch books", error);
      }
    };

    fetchBooks();
  }, []);

  const editLink = (_id) => {
    navigate(`/user/edit-books/${_id}`);
  };

  return (
    <div className="container my-5">
      <div className="table-responsive shadow-sm rounded">
        <table className="table table-hover align-middle mb-0 bg-white">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Thumbnail</th>
              <th>Name</th>
              <th>Is Available</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {books.length > 0 ? (
              books.map((book, index) => (
                <tr key={book._id}>
                  <th>{index + 1}</th>

                  <td>
                    <img
                      src={book.imgUI}
                      alt={book.title}
                      className="img-fluid rounded"
                      style={{ width: "60px" }}
                    />
                  </td>

                  <td>{book.title}</td>

                  <td>
                    <span
                      className={`badge ${
                        book.isAvailable ? "bg-success" : "bg-danger"
                      }`}
                    >
                      {book.isAvailable ? "Yes" : "No"}
                    </span>
                  </td>

                  <td>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => editLink(book._id)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No books found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookTabel;
