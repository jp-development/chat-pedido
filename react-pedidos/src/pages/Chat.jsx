import React, { useContext, useState, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { io } from "socket.io-client";
import axios from "axios";
import {Link} from 'react-router-dom'

import Message from "../components/chat/Message";

const Chat = () => {
  const { user } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [actualMessage, setActualMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const socket = useRef();
  const scrollRef = useRef();

  useEffect(() => {
    socket.current = io("http://localhost:4000");
    socket.current.emit()
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({ id: data.id, sender: data.sender, text: data.text });
    });
  }, []);

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

  useEffect(() => {
    arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);

  const sendMessage = async (e) => {
    e.preventDefault();

    if(actualMessage == ''){
      return false
    }

    const message = {
      sender: user.cel,
      text: actualMessage,
    };

    try {
      const messageReq = await axios.post(
        "http://localhost:3000/api/messages/send",
        { sender: message.sender, text: message.text }
      );
      setMessages([...messages, messageReq.data]);
      socket.current.emit("sendMessage", {
        id: messageReq.data.id,
        sender: message.sender,
        text: message.text,
      });

      setActualMessage("");
    } catch (error) {
      console.log(error);
    }
  };

 

  return (
    <>
      <div className="h-screen w-full flex flex-col">
        <div className="w-full p-3 bg-gradient-to-r from-primary to-secondary text-white rounded-b-2xl z-10 ">
          <div className="flex flex-col items-center">
            <h5 className="font-bold text-xl mb-4">Pcifika</h5>
            <div className="p-3 bg-white -mb-9 w-[90%] rounded-lg shadow-lg flex justify-between">
              <div>
                <p className="text-primary font-bold text-lg">
                  Gerente de Zona
                </p>
                <span className="text-black font-bold">Matilde Eucaris</span>
              </div>
            </div>
          </div>
        </div>
        <div className="px-5 my-3 h-full overflow-y-auto  ">
          {messages.map((m) => (
            <Message
              key={m.id}
              reff={scrollRef}
              own={m.sender == user.cel}
              message={m}
            />
          ))}
        </div>
        <div className=" p-2 bottom-0 w-full flex">
          <form className="flex w-full" onSubmit={sendMessage}>
            <div className="w-full border  rounded-lg  mx-2 flex items-center">
              <input
                type="text"
                className="w-full focus:outline-none h-full p-3 "
                placeholder="Message"
                value={actualMessage}
                onChange={(e) => setActualMessage(e.target.value)}
              />
              <Link to='/chat/send-order'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={35}
                  viewBox="0 0 512 512"
                  className="mx-3 fill-primary"
                >
                  <path d="M454.66,169.4A31.86,31.86,0,0,0,432,160H368V144a112,112,0,0,0-224,0v16H80a32,32,0,0,0-32,32V408c0,39,33,72,72,72H392a72.22,72.22,0,0,0,50.48-20.55A69.48,69.48,0,0,0,464,409.25V192A31.78,31.78,0,0,0,454.66,169.4ZM320,336H272v48a16,16,0,0,1-32,0V336H192a16,16,0,0,1,0-32h48V256a16,16,0,0,1,32,0v48h48a16,16,0,0,1,0,32Zm16-176H176V144a80,80,0,0,1,160,0Z" />
                </svg>
              </Link>
            </div>
            <button
              type="submit"
              className="bg-primary text-white rounded-lg p-2 flex gap-1 justify-center fill-white items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                viewBox="0 0 512 512"
              >
                <path d="M16,464,496,256,16,48V208l320,48L16,304Z" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Chat;
