import React from "react";
import { NavLink } from "react-router-dom";

const Navlink = () => {
  return (
    <nav className="w-full bg-gradient-to-br from-primary to-secondary p-8 rounded-b-lg flex justify-center">
      <div className="flex bg-white p-2 w-4/5 justify-center rounded-lg shadow-lg absolute ">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-lg font-bold flex items-center gap-1 fill-white mx-3 bg-primary p-2 text-white rounded-lg "
              : "text-lg font-bold text-black flex items-center gap-1 fill-black mx-3"
          }
          to="/admin/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 512 512"
          >
            <polygon points="496 496 16 496 16 16 48 16 48 464 496 464 496 496" />
            <path d="M192,432H80V208H192Z" />
            <path d="M336,432H224V160H336Z" />
            <path d="M479.64,432h-112V96h112Z" />
          </svg>
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-lg font-bold flex items-center gap-1 fill-white mx-3 bg-primary p-2 text-white rounded-lg"
              : "text-lg font-bold text-black flex items-center gap-1 fill-black mx-3"
          }
          to="users"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 512 512"
          >
            <path d="M332.64,64.58C313.18,43.57,286,32,256,32c-30.16,0-57.43,11.5-76.8,32.38-19.58,21.11-29.12,49.8-26.88,80.78C156.76,206.28,203.27,256,256,256s99.16-49.71,103.67-110.82C361.94,114.48,352.34,85.85,332.64,64.58Z" />
            <path d="M432,480H80A31,31,0,0,1,55.8,468.87c-6.5-7.77-9.12-18.38-7.18-29.11C57.06,392.94,83.4,353.61,124.8,326c36.78-24.51,83.37-38,131.2-38s94.42,13.5,131.2,38c41.4,27.6,67.74,66.93,76.18,113.75,1.94,10.73-.68,21.34-7.18,29.11A31,31,0,0,1,432,480Z" />
          </svg>
          Usuarios
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-lg font-bold flex items-center gap-1 fill-white mx-3 bg-primary p-2 text-white rounded-lg"
              : "text-lg font-bold text-black flex items-center gap-1 fill-black mx-3"
          }
          to="orders"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 512 512"
          >
            <path d="M454.65,169.4A31.82,31.82,0,0,0,432,160H368V144a112,112,0,0,0-224,0v16H80a32,32,0,0,0-32,32V408c0,39,33,72,72,72H392a72.22,72.22,0,0,0,50.48-20.55A69.48,69.48,0,0,0,464,409.25V192A31.75,31.75,0,0,0,454.65,169.4ZM332.49,274l-89.6,112a16,16,0,0,1-12.23,6h-.26a16,16,0,0,1-12.16-5.6l-38.4-44.88a16,16,0,1,1,24.32-20.8L230,350.91,307.51,254a16,16,0,0,1,25,20ZM336,160H176V144a80,80,0,0,1,160,0Z" />
          </svg>
          Pedidos
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-lg font-bold flex items-center gap-1 fill-white mx-3 bg-primary p-2 text-white rounded-lg"
              : "text-lg font-bold text-black flex items-center gap-1 fill-black mx-3"
          }
          to="/admin/chat/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 512 512"
          >
            <path d="M408,48H104a72.08,72.08,0,0,0-72,72V312a72.08,72.08,0,0,0,72,72h24v64a16,16,0,0,0,26.25,12.29L245.74,384H408a72.08,72.08,0,0,0,72-72V120A72.08,72.08,0,0,0,408,48ZM160,248a32,32,0,1,1,32-32A32,32,0,0,1,160,248Zm96,0a32,32,0,1,1,32-32A32,32,0,0,1,256,248Zm96,0a32,32,0,1,1,32-32A32,32,0,0,1,352,248Z" />{" "}
          </svg>
          Chat
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-lg font-bold flex items-center gap-1 fill-white mx-3 bg-primary p-2 text-white rounded-lg"
              : "text-lg font-bold text-black flex items-center gap-1 fill-black mx-3"
          }
          to="options"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 512 512"
          >
            <path d="M64,144H290.75a48,48,0,0,0,90.5,0H448a16,16,0,0,0,0-32H381.25a48,48,0,0,0-90.5,0H64a16,16,0,0,0,0,32Z" />
            <path d="M448,368H381.25a48,48,0,0,0-90.5,0H64a16,16,0,0,0,0,32H290.75a48,48,0,0,0,90.5,0H448a16,16,0,0,0,0-32Z" />
            <path d="M448,240H221.25a48,48,0,0,0-90.5,0H64a16,16,0,0,0,0,32h66.75a48,48,0,0,0,90.5,0H448a16,16,0,0,0,0-32Z" />
          </svg>
          Configuraciones
        </NavLink>
      </div>
    </nav>
  );
};

export default Navlink;
