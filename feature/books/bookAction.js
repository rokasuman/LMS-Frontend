import { AdminFetchBookApi, postNewBookApi } from "./bookApi"


export const postNewAction =async (payload)=>{
    const book = await postNewBookApi(payload)
    console.log(book)
}

export const AdminFetchAllBooksAction =async ()=>{
    const response = await AdminFetchBookApi()
    console.log(response)
}