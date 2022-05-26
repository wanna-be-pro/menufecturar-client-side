import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";

const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    console.log(user);

  return (
    <div>
      <div className="drawer drawer-mobile text-black">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <Outlet />
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-2/5 lg:w-auto  bg-[#b8cef9]">
            <li>
              <Link to="/dashboard">My orders</Link>
            </li>
            <li>
              <Link to="/dashboard/review">Add a review</Link>
            </li>
            <li>
              <Link to="/dashboard/profile">Profile</Link>
            </li>

            <li>
              <Link to="/dashboard/makeadmin">Make Admin</Link>
            </li>
            <li>
              <Link to="/dashboard/manageorders">Manage Orders</Link>
            </li>
            <li>
              <Link to="/dashboard/manageproducts">Manage Products</Link>
            </li>
            <li>
              <Link to="/dashboard/addproduct">Add a product</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
