import { AdminFetchBookApi, postNewBookApi } from "./bookApi"
import { setBook } from "./bookSlice"


export const postNewAction =async (payload)=>{
    const book = await postNewBookApi(payload)
    console.log(book)
}

export const AdminFetchAllBooksAction = () => async (dispatch) => {
  try {
    const result = await AdminFetchBookApi(); // returns { status, books }

    if (result?.status === "success" && Array.isArray(result.books)) {
      dispatch(setBook(result.books)); // dispatch the array
    } else {
      dispatch(setBook([])); // fallback
    }
  } catch (error) {
    console.error(error);
    dispatch(setBook([]));
  }
};
