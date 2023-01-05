import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const { userLogin, googleLogin } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // login with email and password
    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          toast.success("Successfully Login!");
          form.reset();
          navigate(from, { replace: true });
        }
        console.log(user);
      })
      .catch((error) => toast.error(error));
  };

  // login with google
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        if (user) {
          toast.success("Login Successful!");
          navigate(from, { replace: true });
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="w-11/12 md:w-8/12 lg:w-2/5 border border-warning mx-auto bg-slate-100 my-8 rounded-2xl shadow-2xl py-10">
      <h1 className="text-4xl font-semibold text-center pt-4">
        <span className="text-3xl font-thin">Welcome Back!</span> <br /> Login
        Now
      </h1>
      <form onSubmit={handleLogin} className="px-14 py-10">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered font-sans text-xl border-warning"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg">Password</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="input input-bordered font-sans text-xl border-warning"
            required
          />
          <label className="label">
            <Link to="" className="label-text-alt link text-sm  link-hover">
              Forgot password?
            </Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-warning text-xl"
            type="submit"
            value="Login"
          />
        </div>
      </form>
      <p className="text-center">
        Not a member?{" "}
        <Link className="text-orange-600 font-semibold" to="/signup">
          Sign Up
        </Link>{" "}
      </p>
      <div className="divider w-full">OR</div>
      <div className="text-center">
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline capitalize font-mono text-xl w-2/3"
        >
          <FcGoogle className="mr-4 text-2xl" />
          Login With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
