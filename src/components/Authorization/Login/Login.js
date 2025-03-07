import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { GrClose } from "react-icons/gr";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { authError, LoginUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const redirectUrl = location.state?.from?.pathname || "/";
  const onSubmit = (data) => {
    console.log(data);
    LoginUser(data.email, data.password, navigate, redirectUrl);
  };
  //Dynamic Title
  useEffect(() => {
    document.title = "Login | Hopewell Hospital";
  }, []);
  return (
    <div className="bg-cyan-50 ">
      <div className="flex items-center justify-center min-h-screen">
        <div className="max-w-lg mx-auto rounded shadow-xl shadow-cyan-200 overflow-hidden py-10 px-32 bg-white relative z-1">
          <div
            onClick={() => navigate("/")}
            className="absolute top-2 right-0 btn px-4"
          >
            <GrClose size="1.5em" className="text-cyan-500" />
          </div>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="">
              <h2 className="text-cyan-500 text-2xl font-bold text-center">
                Login
              </h2>
              <p className="text-cyan-500 text-center">Hey! Welcome back!</p>
            </div>

            <div className="grid grid-cols-6 gap-6 space-y-2">
              <div className="relative col-span-6">
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="input-field"
                  placeholder="Your Email"
                  {...register("email")}
                  required
                />
              </div>

              <div className="relative col-span-6">
                <input
                  id="password"
                  type="password"
                  name="password"
                  
                  className="input-field"
                  placeholder="Your Password"
                  {...register("password")}
                  minLength={6}
                />
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button className="btn btn-primary" type="submit">
                Login
              </button>
            </div>

            <p className="text-center">
              If you don't have an account! <br />
              <Link
                className="text-cyan-500 hover:text-cyan-400 no-underline"
                to="/register"
              >
                Create new one
              </Link>
            </p>
            {authError && (
              <p className="text-center text-red-600">{authError}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
