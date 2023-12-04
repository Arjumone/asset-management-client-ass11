import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const JoinAsAdmin = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [signedUp, setSignedUp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const fullName = form.name.value;
    const companyName = form.companyName.value;
    const companyLogo = form.companyLogo.value;
    const dateOfBirth = form.dateOfBirth.value;
    const select = form.select.value;

    const userName = user.displayName;
    const userEmail = user.email;
    const userImage = user.photoURL;

    const userInfo = {
      fullName,
      companyName,
      companyLogo,
      dateOfBirth,
      select,
      userName,
      userEmail,
      userImage,
    };

    axiosSecure
      .put(`/users/admin/${user.email}`, userInfo)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          setSignedUp(true); 
        }
      })
      .catch((error) => {
        
        console.log(error);
      });
  };

  if (signedUp) {
    navigate("/adminDashboard/adminHome");
    return null; 
  }

  return (
    <div>
      <Helmet>
        <title>Asset || Sign Up</title>
      </Helmet>
      <div className="card flex-shrink-0 shadow-2xl bg-base-100 w-full pt-20">
        <form onSubmit={handleSubmit} className="card-body">
          {/* full name and company name */}
          <div className=" flex gap-2">
            <div className="form-control w-1/2">
              <label className="label"></label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control w-1/2">
              <label className="label"></label>
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                className="input input-bordered"
              />
            </div>
          </div>
          {/*company logo and email  */}
          <div className=" flex gap-2">
            <div className="form-control w-1/2">
              <label className="label"></label>
              <input
                type="text"
                name="companyLogo"
                placeholder="Company Logo"
                className="input input-bordered"
              />
            </div>
            <div className="form-control w-1/2">
              <label className="label"></label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
          </div>
          {/* password and date of birth */}
          <div className=" flex gap-2">
            <div className="form-control w-1/2">
              <label className="label"></label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control w-1/2">
              <label className="label"></label>
              <input
                type="text"
                name="dateOfBirth"
                placeholder="Date Of Birth"
                className="input input-bordered"
              />
            </div>
          </div>
          {/* select */}
          <div className="form-control w-1/2">
            <select
              name="select"
              className="select select-bordered w-full max-w-xs"
            >
              <option name="select" disabled selected>
                Select a package
              </option>
              <option name="select">5 Members for $5</option>
              <option name="select">10 Members for $8</option>
              <option name="select">20 Members for $15</option>
            </select>
          </div>
          <div className="form-control mt-2">
            <input className="btn btn-primary" type="submit" value="Sign Up" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinAsAdmin;
