import EditBooksForm from "../../src/component/form/bookFroms/EditBookForm";
import { useNavigate, useParams } from "react-router-dom";

const EditBookPage = () => {
  const navigate = useNavigate();
  const { _id } = useParams(); // 👈 get book id from URL

  const backLink = () => navigate("/user/books");

  return (
    <>
      <h3 className="py-3 px-3">Edit Book</h3>
      <hr />

      <button
        onClick={backLink}
        className="btn btn-primary gap-2 ms-2"
      >
        Go Back
      </button>

    
      <EditBooksForm bookId={_id} />
    </>
  );
};

export default EditBookPage;
