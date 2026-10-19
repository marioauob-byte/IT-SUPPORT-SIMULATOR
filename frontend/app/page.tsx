"use client";

import { useState } from "react";

const tickets = [
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
  {
    priority: "🔵",
    title: "[SEC-P2] Possible Phishing Email",
    user: "Andrea Alberga",
  },
  {
    priority: "🟢",
    title: "[ACC-P3] Accesso Cartella Marketing",
    user: "Francesca Madè",
  },
];

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-2">
        🎫 IT Support Simulator
      </h1>

      <p className="text-gray-400 mb-8">
        Welcome Stagista 02
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
            className="w-full p-3 rounded bg-gray-800 mb-3"
          />

          <input
            type="text"
            placeholder="User Name"
            className="w-full p-3 rounded bg-gray-800 mb-3"
          />

          <select className="w-full p-3 rounded bg-gray-800 mb-3">
            <option>Incident</option>
            <option>Service Request</option>
            <option>Access</option>
            <option>Security</option>
          </select>

          <textarea
            placeholder="Description"
            className="w-full p-3 rounded bg-gray-800"
          />
        </div>
      )}

      <div className="grid grid-cols-2 gap-6">
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
          <p className="text-4xl mt-3">7</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <h2 className="text-xl font-semibold">⭐ XP</h2>
          <p className="text-4xl mt-3">120</p>
        </div>
      </div>

      <div className="mt-10">
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