import React from 'react';
import Header from "../Shared/Header";
import {Outlet, Link} from "react-router-dom"

const Dashboard = () => {
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    {/* <!-- Page content here --> */}
                    <h2 className="text-4xl text-purple-500">Dashboard</h2>
                    <Outlet></Outlet>
                </div> 
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                        <li><Link to="/dashboard">My Orders</Link></li>
                        <li><Link to="/dashboard/addreview">Add A Review</Link></li>
                        <li><Link to="/dashboard/myprofile">My Profile</Link></li>
                    </ul>
  
                </div>
            </div>
        </div>
    );
};

export default Dashboard;