// import { NavLink, Outlet } from "react-router-dom"
// import Logo from "../Pages/DashBoard/Logo/Logo";

import { FaEmpire, FaEnvelope, FaHome, FaIdBadge, FaList, FaPeopleArrows, FaProductHunt, FaRegSquare, FaSearch } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

  
//   const AdminDashBoard = () => {
//     const navLinks = (
//       <>
//         <NavLink to="adminHome" className={"active:backdrop-brightness-150 text-xl"} >
//           <li>Home</li>
//         </NavLink>
//         <NavLink to="assetList"className={"active:backdrop-brightness-150 text-xl"}>
//           <li>Asset List</li>
//         </NavLink>
//         <NavLink to="addAnAsset"className={"active:backdrop-brightness-150 text-xl"}>
//           <li>Add An Asset</li>
//         </NavLink>
//         <NavLink to="allRequests"className={"active:backdrop-brightness-150 text-xl"}>
//           <li>All Request</li>
//         </NavLink>
//         <NavLink to="customRequestList"className={"active:backdrop-brightness-150 text-xl"}>
//           <li>Custom Request List</li>
//         </NavLink>
//         <NavLink to="myEmployeeList"className={"active:backdrop-brightness-150 text-xl"}>
//           <li>My Employee List</li>
//         </NavLink>
//         <NavLink to="addAnEmployee"className={"active:backdrop-brightness-150 text-xl"}>
//           <li>Add An Employee</li>
//         </NavLink>
//         <NavLink to="profile"className={"active:backdrop-brightness-150 text-xl"}>
//           <li>Profile</li>
//         </NavLink>
//       </>
//     );
//     return (
//      <div>
//       <div className="navbar bg-base-100">
//   <div className="navbar-start">
//     <div className="dropdown">
//       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//       </div>
//       <ul className="menu menu-sm dropdown-content mt-3 mr-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//         {navLinks}
//       </ul>
//     </div>
//     <h2 className="  text-xl"><Logo></Logo></h2>
//   </div>
//   <div className="navbar-center sm:hidden lg:flex ">
//     <ul className="menu menu-horizontal gap-4 text-red-500 mr-3 ">
//       {navLinks}
//     </ul>
//   </div>
//   <div className="navbar-end">
//     <a className="btn">Logout</a>
//   </div>
// </div>
// <div className=" flex-1 p-8">
//         <Outlet></Outlet>
//       </div>
//      </div>
//     );
//   };
  
//   export default AdminDashBoard;
  



const AdminDashBoard = () => {
  return (
    <div className=" flex">
    {/* dashboard side bar */}
    <div className="w-66 min-h-screen bg-orange-400">
      <ul className="menu p-4">
        
        
          <li>
          <NavLink to="adminHome">
            <FaHome></FaHome>
            Admin Home
          </NavLink>
        </li>
          <li>
          <NavLink to="assetList">
            <FaList></FaList>
            Asset List
          </NavLink>
        </li>
          <li>
          <NavLink to="addAnAsset">
            <FaProductHunt></FaProductHunt>
            Add An Asset
          </NavLink>
        </li>
          <li>
          <NavLink to="allRequests">
            <FaRegSquare></FaRegSquare>
            All Requests
          </NavLink>
        </li>
          <li>
          <NavLink to="customRequestList">
            <FaSearch></FaSearch>
            Custom Request List
          </NavLink>
        </li>
          <li>
          <NavLink to="myEmployeeList">
            <FaPeopleArrows></FaPeopleArrows>
            My Employee List
          </NavLink>
        </li>
          <li>
          <NavLink to="addAnEmployee">
            <FaEmpire></FaEmpire>
            Add An Employee
          </NavLink>
        </li>
          <li>
          <NavLink to="profile">
            <FaIdBadge></FaIdBadge>
            Profile
          </NavLink>
        </li>
        
        {/* share nav link */}
        <div className="divider"></div>
        <li>
          <NavLink to="/">
            <FaHome></FaHome>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            <FaEnvelope></FaEnvelope>
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
    {/* dashboard content */}
    <div className=" flex-1 p-8">
      <Outlet></Outlet>
    </div>
  </div>
  );
};

export default AdminDashBoard;