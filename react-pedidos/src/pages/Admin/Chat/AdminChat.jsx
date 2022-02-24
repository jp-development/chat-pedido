import React, { useEffect, useState, useContext, useRef } from "react";
import { AuthContext } from "../../../context/AuthContext";
import axios from "axios";
import Message from "../../../components/chat/Message";

const Adminchat = () => {
  const [usersConnected, setUsersConnected] = useState([]);
  const { user } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef();

  useEffect(async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsersConnected(response.data);
  });

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/messages");
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [user.id]);

  return (
    <div className="mx-auto container h-full flex">
      <div className="p-5 w-1/4 h-full">
        <div className="w-full h-full p-5 bg-white rounded-xl">
          <h5 className="font-bold text-lg text-secondary text-center mb-5">
            Usuarios conectados
          </h5>
          {usersConnected.map((u) => (
            <div
              className="border-b p-3 flex justify-between items-center"
              key={u.id}
            >
              <div>{u.name}</div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <div className="h-full w-full  bg-white rounded-xl flex flex-col ">
          <div className="px-5  h-full overflow-y-auto border-x">
            {messages.map((m) => (
              <Message
                key={m.id}
                reff={scrollRef}
                own={m.sender == user.cel}
                message={m}
              />
            ))}
          </div>
          <div className="w-full flex justify-between my-1">
            <input
              type="text"
              className="border rounded-lg p-2 w-full focus:outline-primary"
            />
            <button
              type="submit"
              className="p-2 bg-primary rounded-lg font-bold text-white mx-3"
            >
              Enviar
            </button>
          </div>
        </div>
      </div>

      <div className="p-5 w-1/4 h-full">
        <div className="w-full h-full p-5 bg-white rounded-xl">
          <h5 className="font-bold text-lg text-secondary text-center mb-5">
            Asesoras atrasadas
          </h5>
          {usersConnected.map((u) => (
            <div
              className="border-b p-3 flex justify-between items-center"
              key={u.id}
            >
              <div>{u.name}</div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Adminchat;
