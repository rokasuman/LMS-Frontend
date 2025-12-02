import Button from 'react-bootstrap/Button';
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import { MdAdsClick } from "react-icons/md";
function App() {
const notify = () => toast.dark("Hello world!");

  

  return (
    <>
    <h1 className='text-center text-danger'>Comming soon...</h1>
    <Button variant="primary" onClick={notify}>Click me <MdAdsClick></MdAdsClick></Button>
    <ToastContainer/>
    </>
  )
}

export default App
