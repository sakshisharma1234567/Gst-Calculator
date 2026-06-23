import { useState } from "react";

function App() {
  const [amount, setAmount] = useState("");
  const [gst, setGst] = useState(18);

  const gstAmount = amount ? (amount * gst) / 100 : 0;
  const total = amount ? Number(amount) + gstAmount : 0;

  const resetFields = () => {
    setAmount("");
    setGst(18);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 p-5">
      <div className="backdrop-blur-lg bg-white/20 border border-white/30 p-8 rounded-3xl shadow-2xl w-full max-w-lg text-white">

        <h1 className="text-4xl font-bold text-center mb-2">
          Indian GST Calculator
        </h1>

        <p className="text-center text-white/80 mb-6">
          Quick & Accurate GST Calculation
        </p>

        <div className="relative mb-4">
          <span className="absolute left-4 top-3 text-white">₹</span>

          <input
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full pl-8 p-3 rounded-xl bg-white/20 border border-white/30 placeholder-white/70 text-white outline-none"
          />
        </div>

        <select
          value={gst}
          onChange={(e) => setGst(Number(e.target.value))}
          className="w-full p-3 rounded-xl mb-4 bg-white/20 border border-white/30 text-white outline-none"
        >
          <option className="text-black" value={5}>5% GST</option>
          <option className="text-black" value={12}>12% GST</option>
          <option className="text-black" value={18}>18% GST</option>
          <option className="text-black" value={28}>28% GST</option>
        </select>

        <div className="bg-white/20 p-4 rounded-xl mb-4">
          <p className="text-lg mb-2">
            GST Amount: <strong>₹{gstAmount.toFixed(2)}</strong>
          </p>

          <p className="text-lg">
            Total Amount: <strong>₹{total.toFixed(2)}</strong>
          </p>
        </div>

        <button
          onClick={resetFields}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold transition"
        >
          Reset
        </button>

        <a
          href="https://digitalheroesco.com"
          target="_blank"
          rel="noreferrer"
        >
          <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-3 rounded-xl mt-4 font-semibold transition">
            Built for Digital Heroes
          </button>
        </a>

        <div className="mt-6 border-t border-white/30 pt-4 text-center">
          <p className="font-semibold text-lg">Sakshi Sharma</p>
          <p className="text-white/80">sakshu9650@gmail.com</p>

         
        </div>

      </div>
    </div>
  );
}

export default App;