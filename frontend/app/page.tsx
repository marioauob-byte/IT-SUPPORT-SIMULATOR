"use client";

import { useState } from "react";

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  const [tickets, setTickets] = useState([
    {
      priority: "🔴",
      title: "[INC-P2] Errore nella stampante ADR",
      user: "Silvia Boncristiano",
    },
    {
      priority: "🟡",
      title: "[REQ-P3] VPN / Mobile Access",
      user: "Maurizio Ferrari",
    },
  ]);

  const [title, setTitle] = useState("");
  const [user, setUser] = useState("");
  const [category, setCategory] = useState("Incident");

  function createTicket() {
    if (!title || !user) return;

    const newTicket = {
      priority: "🆕",
      title: `[${category}] ${title}`,
      user: user,
    };

    setTickets([newTicket, ...tickets]);

    setTitle("");
    setUser("");
    setCategory("Incident");

    setShowForm(false);
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-2">
        🎫 IT Support Simulator
      </h1>

      <p className="text-gray-400 mb-8">
        Welcome Mario
      </p>

      <button
        onClick={() => setShowForm(!showForm)}
        className="bg-blue-600 px-4 py-2 rounded-lg mb-8 hover:bg-blue-700"
      >
        + New Ticket
      </button>

      {showForm && (
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Create Ticket
          </h2>

          <input
            type="text"
            placeholder="Ticket Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 rounded bg-gray-800 mb-3"
          />

          <input
            type="text"
            placeholder="User Name"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className="w-full p-3 rounded bg-gray-800 mb-3"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 rounded bg-gray-800 mb-3"
          >
            <option>Incident</option>
            <option>Service Request</option>
            <option>Access</option>
            <option>Security</option>
          </select>

          <button
            onClick={createTicket}
            className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700"
          >
            Create Ticket
          </button>
        </div>
      )}

      <div className="grid grid-cols-2 gap-6 mb-10">
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <h2 className="text-xl font-semibold">📩 New Emails</h2>
          <p className="text-4xl mt-3">3</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <h2 className="text-xl font-semibold">📞 Incoming Calls</h2>
          <p className="text-4xl mt-3">2</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <h2 className="text-xl font-semibold">🎟 Open Tickets</h2>
          <p className="text-4xl mt-3">{tickets.length}</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <h2 className="text-xl font-semibold">⭐ XP</h2>
          <p className="text-4xl mt-3">120</p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">
          Recent Tickets
        </h2>

        {tickets.map((ticket, index) => (
          <div
            key={index}
            className="bg-gray-900 p-4 rounded-xl border border-gray-800 mb-3"
          >
            {ticket.priority} {ticket.title} - {ticket.user}
          </div>
        ))}
      </div>
    </main>
  );
}