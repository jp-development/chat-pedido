import React, { useEffect, useState } from "react";
import axios from "axios";

const Viewusers = () => {
  const [users, setUsers] = useState([]);

  useEffect(async () => {
    try {
      const users = await axios.get("http://localhost:3000/api/users");
      setUsers(users.data);
    } catch (error) {}
  }, []);
  return (
    <div className="overflow-x-auto">
      <div className="w-full ">
        <div className="bg-white shadow-md rounded my-6">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Identificador</th>
                <th className="py-3 px-6 text-left">Asesora</th>
                <th className="py-3 px-6 text-center">Estado</th>
                <th className="py-3 px-6 text-center">Telefono</th>
                <th className="py-3 px-6 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {users.map((u) => (
                <tr
                  key={u.id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 text-left whitespace-nowrap font-bold">
                    {u.id}
                  </td>
                  <td className="py-3 px-6 text-left whitespace-nowrap font-bold">
                    Alejandra Martinez
                  </td>
                  <td className="py-3 px-6 text-center whitespace-nowrap font-bold">
                    <span className="bg-orange-400 text-white py-1 px-2 rounded-xl">
                      Atrasada
                    </span>
                  </td>
                  <td className="py-3 px-6 text-center whitespace-nowrap font-bold">
                    {u.cel}
                  </td>
                  <td className="py-3 px-6 text-center whitespace-nowrap font-bold">
                    <button className="bg-red-500 fill-white p-2 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 512 512"
                      >
                        <rect
                          x="32"
                          y="48"
                          width="448"
                          height="80"
                          rx="32"
                          ry="32"
                        />
                        <path d="M74.45,160a8,8,0,0,0-8,8.83L92.76,421.39a1.5,1.5,0,0,0,0,.22A48,48,0,0,0,140.45,464H371.54a48,48,0,0,0,47.67-42.39l0-.21,26.27-252.57a8,8,0,0,0-8-8.83ZM323.31,340.69a16,16,0,1,1-22.63,22.62L256,318.63l-44.69,44.68a16,16,0,0,1-22.63-22.62L233.37,296l-44.69-44.69a16,16,0,0,1,22.63-22.62L256,273.37l44.68-44.68a16,16,0,0,1,22.63,22.62L278.62,296Z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Viewusers;
