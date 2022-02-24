import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import fondoLogin from "../assets/fondo-login.png";

const Login = () => {
  const [cel, setCel] = useState("");

  const { dispatch } = useContext(AuthContext);

  const loginSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const user = await axios.post(`http://localhost:3000/api/auth/login`, {
        cel,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: user.data });
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error });
      console.log(dispatch);
    }
  };

  return (
    <div className=" h-screen w-full flex flex-col items-center justify-center bg-bg-login bg-cover bg-no-repeat md:w-96 md:m-auto ">
      <div className='flex flex-col items-center my-10 fill-primary font-bold text-2xl'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="130"
          height="130"
          viewBox="0 0 512 512"
        >
          <path d="M398,81.84A227.4,227.4,0,0,0,255.82,32C194.9,32,138,55.47,95.46,98.09,54.35,139.33,31.82,193.78,32,251.37A215.66,215.66,0,0,0,67.65,370.13l.19.27c.28.41.57.82.86,1.22s.65.92.73,1.05l.22.4c1.13,2,2,4.44,1.23,6.9L52.46,446.63a29.13,29.13,0,0,0-1.2,7.63A25.69,25.69,0,0,0,76.83,480a29.44,29.44,0,0,0,10.45-2.29l67.49-24.36.85-.33a14.75,14.75,0,0,1,5.8-1.15,15.12,15.12,0,0,1,5.37,1c1.62.63,16.33,6.26,31.85,10.6,12.9,3.6,39.74,9,60.77,9,59.65,0,115.35-23.1,156.83-65.06C457.36,365.77,480,310.42,480,251.49a213.5,213.5,0,0,0-4.78-45C464.88,157.87,437.46,113.59,398,81.84ZM87.48,380h0ZM160,288a32,32,0,1,1,32-32A32,32,0,0,1,160,288Zm96,0a32,32,0,1,1,32-32A32,32,0,0,1,256,288Zm96,0a32,32,0,1,1,32-32A32,32,0,0,1,352,288Z" />
        </svg>
        CHAT PEDIDO
      </div>
      <div className="p-5 rounded-lg bg-white  shadow-2xl w-[85%] ">
        <form onSubmit={loginSubmit}>
          <input
            type="text"
            className="w-full border-b-2 p-2 focus:outline-none"
            placeholder="Introduce tu numero de telefono"
            value={cel}
            onChange={(e) => setCel(e.target.value)}
          />
          <button
            className="w-full p-2 bg-primary rounded-lg my-3"
            type="submit"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;