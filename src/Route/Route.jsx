import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import JoinAsAdmin from "../Pages/JoinAsAdmin/JoinAsAdmin";
import JoinAsEmployee from "../Pages/JoinAsEmployee/JoinAsEmployee";
import AdminDashBoard from "../Layout/AdminDashBoard";
import AssetList from "../Pages/DashBoard/AssetsList/AssetsList";
import AddAnAsset from "../Pages/DashBoard/AddAnAsset/AddAnAsset";
import AllRequests from "../Pages/DashBoard/AllRequests/AllRequests";
import CustomRequestsList from "../Pages/DashBoard/CustomRequestsList/CustomRequestsList";
import MyEmployeeList from "../Pages/DashBoard/MyEmployeeList/MyEmployeeList";
import AddAnEmployee from "../Pages/DashBoard/AddAnEmployee/AddAnEmployee";
import Profile from "../Pages/DashBoard/Profile/Profile";
import SignUp from "../Pages/SignUp/SignUp";
import EmployeeDashBoard from "../Layout/EmployeeDashBoard";
import EmployeeHome from "../Pages/DashBoardEmployee/EmployeeHome/EmployeeHome";
import MyAssets from "../Pages/DashBoardEmployee/EmployeeHome/MyAssets/MyAssets";
import MyTeam from "../Pages/DashBoardEmployee/MyTeam/MyTeam";
import RequestForAnAsset from "../Pages/DashBoardEmployee/RequestForAnAsset/RequestForAnAsset";
import MakeACustomRequest from "../Pages/DashBoardEmployee/MakeACustomRequest/MakeACustomRequest";
import EmployeeProfile from "../Pages/DashBoardEmployee/EmployeeProfile/EmployeeProfile";
import AdminHome from "../Pages/DashBoard/AdminHome/AdminHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <></>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/employees",
        element: <JoinAsEmployee></JoinAsEmployee>,
      },
      {
        path: "/admin",
        element: <JoinAsAdmin></JoinAsAdmin>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "adminDashboard/adminHome",
    element: <AdminDashBoard></AdminDashBoard>,
    children: [
      {
        path: "adminHome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "assetList",
        element: <AssetList></AssetList>
      },
      {
        path: "addAnAsset",
        element: <AddAnAsset></AddAnAsset>,
      },
      {
        path: "allRequests",
        element:<AllRequests></AllRequests> ,
      },
      {
        path: "customRequestList",
        element:<CustomRequestsList></CustomRequestsList>,
      },
      {
        path: "myEmployeeList",
        element:<MyEmployeeList></MyEmployeeList>,
      },
      {
        path: "addAnEmployee",
        element:<AddAnEmployee></AddAnEmployee>,
      },
      {
        path: "profile",
        element:<Profile></Profile>,
      }, 
    ],
  },
  {
    path:"employeeDashboard/employeeLogo",
    element:<EmployeeDashBoard></EmployeeDashBoard>,
    children:[
      {
        path:'employeeHome',
        element:<EmployeeHome></EmployeeHome>
      },
      {
        path:'myAssets',
        element:<MyAssets></MyAssets>
      },
      {
        path:'myTeam',
        element:<MyTeam></MyTeam>
      },
      {
        path:'requestForAnAsset',
        element:<RequestForAnAsset></RequestForAnAsset>
      },
      {
        path:'makeACustomerRequest',
        element:<MakeACustomRequest></MakeACustomRequest>
      },
      {
        path:'EmployeeProfile',
        element:<EmployeeProfile></EmployeeProfile>
      },
    ]
  }
]);
export default router;
