
import { Route, Routes} from "react-router-dom"
import 
{HomePage,
DashboardPages,
LogIn,
ForgetPasswordPage,
BookLandingPage,
SignUpPage} 
from "../pages"
import DefaultLayout from "../component/layouts/DefaultLayout"



const AppRoutes = () => {
  return (
    <div>  
        <Routes>
    {/* public pages*/}
    <Route path="/" element={<DefaultLayout><HomePage/></DefaultLayout>}/>
    <Route path="/login" element={<DefaultLayout><LogIn/></DefaultLayout>}/>
    <Route path="/signup" element={<DefaultLayout><SignUpPage/></DefaultLayout>}/>
        <Route path="/forget-password" element={<DefaultLayout><ForgetPasswordPage/></DefaultLayout>}/>

      {/* private pages*/}
      <Route path="/user" element={<DashboardPages />} />
  </Routes>
  </div>
  )
}

export default AppRoutes