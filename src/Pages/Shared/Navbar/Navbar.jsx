import { useContext } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { FaShoppingCart } from "react-icons/fa";
// import useCart from "../../../hooks/useCart";
import { AuthContext } from "../../../Provider/AuthProvider";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
//   const [cart] = useCart()

  const handleLogOut = () => {
    logout()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navLinks = (
    <>
      <NavLink to="/" className={"active:backdrop-brightness-150"}>
        <li>Home</li>
      </NavLink>
      <NavLink to="/employees"className={"active:backdrop-brightness-150"}>
        <li>Join As Employee</li>
      </NavLink>
      <NavLink to="/admin"className={"active:backdrop-brightness-150"}>
        <li>Join As Admin</li>
      </NavLink>
      {/* <NavLink to="/menu">
        <li>Our Menu</li>
      </NavLink>
      <NavLink to="/order/salad">
        <li>Order Food</li>
      </NavLink> */}
      {/* <NavLink to="/">
        <li>
          <Link to="/dashboard/cart">
          <button className="btn">
            <FaShoppingCart className=" text-2xl"></FaShoppingCart>
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
          </Link>
        </li>
      </NavLink> */}

     
    </>
  );
  return (
    <div>
      <div className="navbar my-6 z-10 bg-opacity-30 bg-black text-white max-w-screen-xl fixed">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <img src="https://i.ibb.co/jZcXtd9/creative-grow-business-agency-minimalist-logo-template-design-gradient-color-premium-vector-729473-1.jpg" className="mr-2 w-10 rounded-full uppercase"></img>
          <p>Asset Company</p>
        </div>
        <div className="navbar-center sm:hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              {/* <span>{user?.displayName}</span> */}
              <button onClick={handleLogOut} className=" btn btn-ghost">
                Sign Out
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login"className={"active:backdrop-brightness-150"}>
                <li>Login</li>
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
