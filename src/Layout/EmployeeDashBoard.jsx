import { NavLink, Outlet } from "react-router-dom"
import EmployeeLogo from "../Pages/DashBoardEmployee/EmployeeLogo/EmployeeLogo";
  
  const EmployeeDashBoard = () => {
    const navLinks = (
      <>
        <NavLink to="employeeHome" className={"active:backdrop-brightness-150 text-xl"} ><li>Home</li>
        </NavLink>
        <NavLink to="myAssets"className={"active:backdrop-brightness-150 text-xl"}>
          <li>My Asset</li>
        </NavLink>
        <NavLink to="myTeam"className={"active:backdrop-brightness-150 text-xl"}>
          <li>My Team</li>
        </NavLink>
        <NavLink to="requestForAnAsset"className={"active:backdrop-brightness-150 text-xl"}>
          <li>Request for An Asset</li>
        </NavLink>
        <NavLink to="makeACustomerRequest"className={"active:backdrop-brightness-150 text-xl"}>
          <li>Make A Customer Request</li>
        </NavLink>
        <NavLink to="EmployeeProfile"className={"active:backdrop-brightness-150 text-xl"}>
          <li>Profile</li>
        </NavLink>
      </>
    );
    return (
     <div>
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul className="menu menu-sm dropdown-content mt-3 mr-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <h2 className="  text-xl"><EmployeeLogo></EmployeeLogo></h2>
  </div>
  <div className="navbar-center sm:hidden lg:flex ">
    <ul className="menu menu-horizontal gap-4 text-red-500 mr-3 ">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Logout</a>
  </div>
</div>
<div className=" flex-1 p-8">
        <Outlet></Outlet>
      </div>
     </div>
    );
  };
  
  export default EmployeeDashBoard;
  