import { useEffect, useState } from "react";
import api from "../api/api";

export default function MessagesAdmin() {
  const [messages, setMessages] = useState([]);

  const token = localStorage.getItem("token");

  const fetchMessages = async () => {
    const res = await api.get(`${import.meta.env.VITE_API_URL}/api/messages`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setMessages(res.data);
  };

  const deleteMessage = async (id) => {
    if (!window.confirm("Delete this message?")) return;

    await api.delete(`${import.meta.env.VITE_API_URL}/api/messages/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    fetchMessages();
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl  font-bold text-[#ffbb02] mb-6">
        Contact Messages
      </h1>

      {messages.length === 0 ? (
        <p>No messages found.</p>
      ) : (
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg._id}
              className="bg-white p-4 rounded-xl shadow flex justify-between"
            >
              <div>
                <h3 className="font-semibold">{msg.name}</h3>
                <p className="text-sm text-gray-600">{msg.email}</p>
                <p className="mt-2">{msg.message}</p>
              </div>

              <button
                onClick={() => deleteMessage(msg._id)}
                className="text-red-600 font-bold"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
