import { Route, Routes } from "react-router-dom";

import {
  HomePage,
  DashboardPages,
  LogIn,
  ForgetPasswordPage,
  BookLandingPage,
  SignUpPage,
  Books,
  EditBookPage,
  ReviewPage,
  UserPage,
  NewBookPage,
  Profile,
  BorrowBooks,
  VerfiyUser
} from "../pages";
import DefaultLayout from "@component/layouts/DefaultLayout";
import UserLayout from "@component/layouts/UserLayout";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        {/* public pages */}
        <Route path="/" element={<DefaultLayout><HomePage/></DefaultLayout>} />
        <Route path="/login" element={<DefaultLayout><LogIn/></DefaultLayout>} />
        <Route path="/signup" element={<DefaultLayout><SignUpPage/></DefaultLayout>} />
        <Route path="/activate-user" element={<DefaultLayout><VerfiyUser/></DefaultLayout>} />
        <Route path="/forget-password" element={<DefaultLayout><ForgetPasswordPage/></DefaultLayout>} />

        {/* private pages */}
        <Route path="/user" element={<UserLayout />}>
          <Route index element={<DashboardPages />} />
           <Route path="books" element={<Books />}></Route>
           <Route path="borrow" element={<BorrowBooks />}></Route>
           <Route path="new-books" element={<NewBookPage />}></Route>
           <Route path="edit-books/:_id" element={<EditBookPage />}></Route>
           <Route path="book-landing" element={<BookLandingPage />}></Route>
           <Route path="reviews" element={<ReviewPage />}></Route>
           <Route path="all" element={<UserPage />}></Route>
            <Route path="profile" element={<Profile />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
