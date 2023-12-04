import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2>404</h2>
            <Link to="/">
            <button className=" btn bg-red-500 text-white">Go to home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;