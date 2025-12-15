import Stack from 'react-bootstrap/Stack';
import { Link } from 'react-router-dom';
import { MdSpaceDashboard } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdOutlineRateReview } from "react-icons/md";

export const Sidebar = () => {
    return (
        <Stack gap={3} className="p-2">
            <Link className='text-white text-decoration-none' to="/user"><MdSpaceDashboard/> Dashboard</Link>
            <Link className='text-white text-decoration-none' to="/user/books"> <IoBookSharp/> Books</Link>
             <Link className='text-white text-decoration-none' to="/user/reviews"> <MdOutlineRateReview/> Review</Link>
            <Link className='text-white text-decoration-none' to="/user/all"><FaUser/> All Users</Link>
            <Link className='text-white text-decoration-none' to="/user/borrow"><FaHistory/> Borrow History</Link>
            <Link className='text-white text-decoration-none' to="/user/profile"><CgProfile/> Profile</Link>
        </Stack>
    );
};
