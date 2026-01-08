import { AdminFetchBookApi, postNewBookApi } from "./bookApi"
import { setBook } from "./bookSlice"


export const postNewAction =async (payload)=>{
    const book = await postNewBookApi(payload)
    console.log(book)
}


export const AdminFetchAllBooksAction = () => async (dispatch) => {
  try {
    const { status, payload } = await AdminFetchBookApi();
    if (status === "success") {
      dispatch(setBook(payload));
    }
  } catch (error) {
    console.error(error);
  }
};
