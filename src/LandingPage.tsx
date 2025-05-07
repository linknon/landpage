import React, { useState } from "react";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [count, setCount] = useState(312);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setCount((prev) => prev + 1);
    }
    alert("Cadastro realizado com sucesso!");
  };

  return (
    <div className="flex flex-col min-h-screen justify-between bg-neutral-900 text-white font-sans">
      <header className="p-6 text-center border-b border-neutral-800">
        <h1 className="text-4xl font-bold">Linknon</h1>
        <p className="text-lg mt-2 text-neutral-400">
          Onde o profissional desabafa. Anônimo, seguro, real.
        </p>
      </header>

      <main className="flex-grow flex items-center justify-center px-4">
        <div className="max-w-xl text-center">
          <h2 className="text-2xl font-semibold mb-4">
            No LinkedIn você elogia o chefe. No{" "}
            <span className="text-red-500">Linknon</span>, você conta a verdade.
          </h2>
          <p className="text-neutral-300 mb-6">
            Compartilhe experiências ruins de trabalho de forma 100% anônima.
            Ajude a expor a realidade do mercado e apoie quem já passou pelo
            mesmo.
          </p>

          <p className="text-green-400 text-sm font-medium mb-4">
            {count.toLocaleString()} pessoas já estão aguardando o lançamento.
          </p>

          <p className="text-neutral-500 text-sm mb-2">
            Se quiser ser avisado sobre o lançamento, informe seu e-mail ou
            telefone:
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-2"
          >
            <input
              type="text"
              placeholder="Seu e-mail ou telefone (opcional)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 w-full sm:w-auto text-black rounded-md"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-red-600 hover:bg-red-700 transition rounded-md text-white font-semibold"
            >
              Quero participar
            </button>
          </form>
        </div>
      </main>

      <footer className="p-4 text-center text-sm text-neutral-500 border-t border-neutral-800">
        © {new Date().getFullYear()} Linknon.work — Todos os direitos
        reservados.
      </footer>
    </div>
  );
}
