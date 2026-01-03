import { postNewBookApi } from "./bookApi"


export const postNewAction =async (payload)=>{
    const book = await postNewBookApi(payload)
    console.log(book)
}