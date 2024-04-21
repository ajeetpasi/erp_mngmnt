import { useEffect, useState } from "react";
import logo from "../Assets/logo.png";
import { useNavigate } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import Dashboard from "./Sidebar";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [errorMessages, setErrorMessages] = useState({});

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showForgetPass, setShowForgetPass] = useState(false);

  const [loginData, setLoginData] = useState([]);

  const fetchData = async () => {
    const data = await fetch("http://localhost:5000/api/login");
    const json = await data.json();
    console.log(json);
    setLoginData(json);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const uname = event.target.elements.email.value;
    const pass = event.target.elements.password.value;

    const userData = loginData.find((user) => user.username === uname);
    if (userData) {
      if (userData.password !== pass) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        navigate("/dashboard");
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  function handleForgetPassClick() {
    setShowForgetPass(!showForgetPass);
  }

  const renderForm = (
    <div className="flex flex-col lg:flex-row h-screen sm:flex-row">
      <div className="lg:w-1/2 bg-blue-800 h-1/3 sm:h-screen flex justify-center items-center sm:items-center sm:w-1/2">
        <img src={logo} alt="logo" className="w-96 " />
      </div>
      <div className="lg:w-1/2 h-1/2 lg:h-screen sm:h-screen flex justify-center items-center sm:w-1/2">
        <div className="space-y-2 sm:w-96">
          <h1 className="text-2xl font-bold text-left">Hello Again!</h1>
          <h1 className="text-left">Welcome Back</h1>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="flex flex-col ">
                <label className="text-left">Email</label>
                <input
                  placeholder="Email"
                  name="email"
                  type="text"
                  required
                  className="border border-black w-72 sm:w-full h-10 rounded-sm p-4"
                />
                {renderErrorMessage("uname")}
              </div>
              <div className="flex flex-col ">
                <label className="text-left">Password</label>
                <input
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                  required
                  name="password"
                  placeholder="Password"
                  type="password"
                  className="border border-black w-72 sm:w-full h-10 rounded-sm p-4"
                />
                {renderErrorMessage("pass")}
              </div>
              <div>
                <input
                  type="submit"
                  className="bg-blue-950 w-72 sm:w-full h-10 rounded-lg text-white cursor-pointer"
                />
              </div>
              <div onClick={handleForgetPassClick}>
                <Link to="/forgetpass">
                  <h1 className="text-left cursor-pointer">
                    Forget Password ?
                  </h1>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="login-form">
        {isSubmitted ? <Dashboard /> : renderForm}
      </div>
    </>
  );
};

export default Login;
