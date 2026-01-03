import  { useEffect } from 'react'
import { Form } from 'react-bootstrap'
import BookTabel from '../../src/component/tables/BookTabel.jsx'
import { AdminFetchAllBooksAction } from '../../feature/books/bookAction.js'

const Books = () => {
useEffect(()=>{
AdminFetchAllBooksAction()
},[])

  return (
    <div className='p-2'>
      <h3>Books</h3>
      <hr/>
      <div className='text-end'>
       <button className='bg-dark text-white border rounded-2 py-2 px-2'>Add New Book</button>

      </div>
      <div className='mt-4'>
        <div className="">10 book(s) found</div>
        <div className="d-flex justify-content-center mb-4">
          <Form.Control placeholder='search book by name'/>
        </div>
       <BookTabel/>
      </div>
    </div>
  )
}

export default Books