

const BookTabel = () => {

  return (
    <div className="container my-5">
      <div className="table-responsive shadow-sm rounded">
        <table className="table table-hover align-middle mb-0 bg-white">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Thumbnail</th>
              <th scope="col">Name</th>
              <th scope="col">Is Available</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>
                <img
                  src="https://eloquentjavascript.net/img/cover.jpg"
                  alt="book"
                  className="img-fluid rounded"
                  style={{ width: '60px', height: 'auto' }}
                />
              </td>
              <td>JS BOOK</td>
              <td>
                <span className="badge bg-danger">No</span>
              </td>
              <td>
                <button className="btn btn-primary btn-sm me-2">
                  Edit
                </button>
               
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookTabel;
