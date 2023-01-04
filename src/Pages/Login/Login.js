import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const Login = () => {
  const { userLogin } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then(result => {
        const user = result.user;
        if (user) {
          toast.success('Successfully Login!')
          form.reset();
        } 
        console.log(user)
      })
        .then(error => console.log(error))
}


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
    </div>
  );
};

export default Login;
