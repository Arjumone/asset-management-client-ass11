import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2>404</h2>
            <Link to="/">
            <img src="https://i.ibb.co/6RJfXY4/1-10.webp" alt="" />
            <button className=" btn bg-red-500 text-white">Go to home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;