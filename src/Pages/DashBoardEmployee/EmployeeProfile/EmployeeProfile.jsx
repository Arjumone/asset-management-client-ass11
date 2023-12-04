import { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const EmployeeProfile = () => {
  const { updateUserProfile } = useContext(AuthContext);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [userData, setUserData] = useState({});
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    // Fetch user data and set it to the state
    axiosPublic.get("/users")
      .then((res) => {
        setUserData(res.data);
      })
      .catch(error => console.log(error));
  }, [axiosPublic]);

  const onSubmit = (data) => {
    updateUserProfile(data.name, data.dateOfBirth)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User information updated successfully",
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <Helmet>
        <title>Employee Profile</title>
      </Helmet>
      <div className="hero mx-auto min-h-screen bg-base-200 w-[800px] pt-20">
        <div className="hero-content w-full">
          <div className="card flex-shrink-0 shadow-2xl bg-base-100 w-full">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                  defaultValue={userData.name}
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  readOnly
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">Date of Birth</label>
                <input
                  type="text"
                  name="dateOfBirth"
                  {...register("dateOfBirth")}
                  defaultValue={userData.dateOfBirth}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-2">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Update"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;
