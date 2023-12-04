import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div>
               <div className="carousel w-full h-[600px]">
  <div id="slide1" className="carousel-item relative w-full ">
    <img src="https://i.ibb.co/6XwvmVD/top-view-young-female-sitting-table-showing-document-office-140725-106107.jpg" className="w-full" />
          <Link to="/admin">
          <button  className="text-center text-2xl  bg-yellow-600 text-white right-32 top-40 btn absolute mt-96 ml-96">
            <div className="">Join As Admin</div>
          </button>
          </Link>
    {/* <button className="text-center text-2xl  bg-yellow-600 text-white right-32 top-40 btn absolute mt-96 ml-96">Join As Admin</button> */}
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/pQ2fq8j/co-workers-smiling-1098-609.jpg" className="w-full" />
   <Link to="employees">
   <button className="text-center text-2xl bg-yellow-600 text-white right-32 top-40 btn absolute mt-96 ml-96">Join As Employee</button>
   </Link>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>
        </div>
    );
};

export default Banner;