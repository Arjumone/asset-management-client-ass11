import { useContext } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { AuthContext } from "../../Provider/AuthProvider";
import {  useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const JoinAsEmployee = () => {
  const axiosPublic = useAxiosPublic();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const { register, formState: { errors }, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            const userInfo = {
              name: data.name,
              photoURL:data.photoURL,
              dateOfBirth: data.dateOfBirth,
              email: data.email,
              role: "employee" 
            };
            axiosPublic.post("/users", userInfo)
              .then((res) => {
                if (res.data.insertedId) {
                  console.log("User added to the database");
                  reset();
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User created successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/employeeDashboard/employeeLogo'); 
                }
              });
          })
          .catch(error => console.log(error));
      });
  };

  return (
    <div>
      <Helmet>
        <title>Asset || Sign Up</title>
      </Helmet>
      <div className="hero mx-auto min-h-screen bg-base-200 w-[800px] pt-20">
        <div className="hero-content w-full ">
          <div className="card flex-shrink-0  shadow-2xl bg-base-100 w-full">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                           <div className="form-control">
                 <label className="label"></label>
                 <input
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className=" text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label"></label>
                <input
                  type="text"
                  name="photoURL"
                  {...register("photoURL", { required: true })}
                  placeholder="PhotoURL"
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className=" text-red-600">PhotoURL is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label"></label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className=" text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label"></label>
                <input
                  type="password"
                  name="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <span className=" text-red-600">Password is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className=" text-red-600">
                    Password must be 6 characters
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className=" text-red-600">
                    Password must be less then 20 characters
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className=" text-red-600">
                    Password must have one uppercase one lower case,one number
                    and one special character
                  </span>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label"></label>
                <input
                  type="text"
                  name="dateOfBirth"
                  {...register("dateOfBirth", { required: true })}
                  placeholder="Date Of Birth"
                  className="input input-bordered"
                />
                {errors.dateOfBirth && (
                  <span className=" text-red-600">Date Of Birth is required</span>
                )}
              </div>
                <div className="form-control mt-2">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Sign Up"
                  />
                </div>
            </form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinAsEmployee;
