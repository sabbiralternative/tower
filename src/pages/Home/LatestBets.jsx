const LatestBets = () => {
  return (
    <div
      id="step-gameParticipants"
      className="relative w-full overflow-hidden min-h-[420px] scrollbar-none h-[420px]"
    >
      <div className="flex items-center justify-between p-2">
        <span className="text-sm font-semibold text-zinc-200">Latest bets</span>
        <div className="relative flex items-center gap-1 p-1 ml-auto font-medium border rounded-full border-zinc-700/50 bg-zinc-800">
          <button className="flex z-50 items-center justify-between px-4 py-2 text-xs font-medium text-zinc-200 rounded-full">
            All bets
          </button>
          <button className="flex z-50 items-center justify-between px-4 py-2 text-xs font-medium text-zinc-200 rounded-full">
            My bets
          </button>
          <span className="absolute left-0 z-40 transition-all w-1/2 h-full bg-zinc-900/50 rounded-l-full" />
        </div>
      </div>
      <table className="w-full overflow-hidden table-auto rounded-2xl animate__animated animate__fadeIn animate__faster">
        <tbody className>
          <tr className="sticky top-0 w-full h-12 text-xs font-medium text-zinc-300 bg-zinc-800">
            <th className="p-2 pl-4 text-left">User</th>
            <th className="p-2 text-left">Amount</th>
            <th className="p-2 text-left">Multiplier</th>
            <th className="p-2 text-left">Profit</th>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">ajay***</td>
            <td className="p-2 text-start">₹ 50.00</td>
            <td className="p-2 text-start text-green-500">x 1.32</td>
            <td className="p-2 flex items-center gap-1 text-start text-green-500">
              ₹ 16.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">vino***</td>
            <td className="p-2 text-start">₹ 200.00</td>
            <td className="p-2 text-start text-green-500">x 5.56</td>
            <td className="p-2 flex items-center gap-1 text-start text-green-500">
              ₹ 912.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">kush***</td>
            <td className="p-2 text-start">₹ 100.00</td>
            <td className="p-2 text-start text-green-500">x 2.35</td>
            <td className="p-2 flex items-center gap-1 text-start text-green-500">
              ₹ 135.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">91_7***</td>
            <td className="p-2 text-start">₹ 50.00</td>
            <td className="p-2 text-start text-green-500">x 1.76</td>
            <td className="p-2 flex items-center gap-1 text-start text-green-500">
              ₹ 38.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">vino***</td>
            <td className="p-2 text-start">₹ 200.00</td>
            <td className="p-2 text-start text-zinc-500">-</td>
            <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
              ₹ 200.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">kush***</td>
            <td className="p-2 text-start">₹ 100.00</td>
            <td className="p-2 text-start text-zinc-500">-</td>
            <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
              ₹ 100.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">91_7***</td>
            <td className="p-2 text-start">₹ 50.00</td>
            <td className="p-2 text-start text-zinc-500">-</td>
            <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
              ₹ 50.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">ajay***</td>
            <td className="p-2 text-start">₹ 50.00</td>
            <td className="p-2 text-start text-zinc-500">-</td>
            <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
              ₹ 50.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">vino***</td>
            <td className="p-2 text-start">₹ 200.00</td>
            <td className="p-2 text-start text-zinc-500">-</td>
            <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
              ₹ 200.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">ajay***</td>
            <td className="p-2 text-start">₹ 50.00</td>
            <td className="p-2 text-start text-green-500">x 1.32</td>
            <td className="p-2 flex items-center gap-1 text-start text-green-500">
              ₹ 16.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">vino***</td>
            <td className="p-2 text-start">₹ 200.00</td>
            <td className="p-2 text-start text-zinc-500">-</td>
            <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
              ₹ 200.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">ajay***</td>
            <td className="p-2 text-start">₹ 50.00</td>
            <td className="p-2 text-start text-green-500">x 1.32</td>
            <td className="p-2 flex items-center gap-1 text-start text-green-500">
              ₹ 16.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">nare***</td>
            <td className="p-2 text-start">₹ 500.00</td>
            <td className="p-2 text-start text-green-500">x 1.32</td>
            <td className="p-2 flex items-center gap-1 text-start text-green-500">
              ₹ 160.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">vino***</td>
            <td className="p-2 text-start">₹ 200.00</td>
            <td className="p-2 text-start text-zinc-500">-</td>
            <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
              ₹ 200.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">ajay***</td>
            <td className="p-2 text-start">₹ 256.00</td>
            <td className="p-2 text-start text-green-500">x 1.32</td>
            <td className="p-2 flex items-center gap-1 text-start text-green-500">
              ₹ 81.92
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">vino***</td>
            <td className="p-2 text-start">₹ 200.00</td>
            <td className="p-2 text-start text-green-500">x 5.56</td>
            <td className="p-2 flex items-center gap-1 text-start text-green-500">
              ₹ 912.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">ajay***</td>
            <td className="p-2 text-start">₹ 50.00</td>
            <td className="p-2 text-start text-zinc-500">-</td>
            <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
              ₹ 50.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">vino***</td>
            <td className="p-2 text-start">₹ 200.00</td>
            <td className="p-2 text-start text-zinc-500">-</td>
            <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
              ₹ 200.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">vino***</td>
            <td className="p-2 text-start">₹ 200.00</td>
            <td className="p-2 text-start text-zinc-500">-</td>
            <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
              ₹ 200.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">ajay***</td>
            <td className="p-2 text-start">₹ 50.00</td>
            <td className="p-2 text-start text-green-500">x 1.32</td>
            <td className="p-2 flex items-center gap-1 text-start text-green-500">
              ₹ 16.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">nare***</td>
            <td className="p-2 text-start">₹ 500.00</td>
            <td className="p-2 text-start text-green-500">x 1.76</td>
            <td className="p-2 flex items-center gap-1 text-start text-green-500">
              ₹ 380.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">vino***</td>
            <td className="p-2 text-start">₹ 200.00</td>
            <td className="p-2 text-start text-zinc-500">-</td>
            <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
              ₹ 200.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">ajay***</td>
            <td className="p-2 text-start">₹ 256.00</td>
            <td className="p-2 text-start text-green-500">x 1.32</td>
            <td className="p-2 flex items-center gap-1 text-start text-green-500">
              ₹ 81.92
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">vino***</td>
            <td className="p-2 text-start">₹ 200.00</td>
            <td className="p-2 text-start text-zinc-500">-</td>
            <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
              ₹ 200.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">vino***</td>
            <td className="p-2 text-start">₹ 200.00</td>
            <td className="p-2 text-start text-zinc-500">-</td>
            <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
              ₹ 200.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">ajay***</td>
            <td className="p-2 text-start">₹ 50.00</td>
            <td className="p-2 text-start text-zinc-500">-</td>
            <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
              ₹ 50.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">vino***</td>
            <td className="p-2 text-start">₹ 200.00</td>
            <td className="p-2 text-start text-zinc-500">-</td>
            <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
              ₹ 200.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">ajay***</td>
            <td className="p-2 text-start">₹ 50.00</td>
            <td className="p-2 text-start text-green-500">x 1.32</td>
            <td className="p-2 flex items-center gap-1 text-start text-green-500">
              ₹ 16.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">vino***</td>
            <td className="p-2 text-start">₹ 200.00</td>
            <td className="p-2 text-start text-zinc-500">-</td>
            <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
              ₹ 200.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">ajay***</td>
            <td className="p-2 text-start">₹ 50.00</td>
            <td className="p-2 text-start text-green-500">x 1.32</td>
            <td className="p-2 flex items-center gap-1 text-start text-green-500">
              ₹ 16.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">edel***</td>
            <td className="p-2 text-start">₹ 50.00</td>
            <td className="p-2 text-start text-zinc-500">-</td>
            <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
              ₹ 50.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">edel***</td>
            <td className="p-2 text-start">₹ 50.00</td>
            <td className="p-2 text-start text-zinc-500">-</td>
            <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
              ₹ 50.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">vino***</td>
            <td className="p-2 text-start">₹ 200.00</td>
            <td className="p-2 text-start text-zinc-500">-</td>
            <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
              ₹ 200.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">ajay***</td>
            <td className="p-2 text-start">₹ 256.00</td>
            <td className="p-2 text-start text-green-500">x 1.32</td>
            <td className="p-2 flex items-center gap-1 text-start text-green-500">
              ₹ 81.92
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">edel***</td>
            <td className="p-2 text-start">₹ 50.00</td>
            <td className="p-2 text-start text-zinc-500">-</td>
            <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
              ₹ 50.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">edel***</td>
            <td className="p-2 text-start">₹ 50.00</td>
            <td className="p-2 text-start text-zinc-500">-</td>
            <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
              ₹ 50.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">vino***</td>
            <td className="p-2 text-start">₹ 200.00</td>
            <td className="p-2 text-start text-zinc-500">-</td>
            <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
              ₹ 200.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">nare***</td>
            <td className="p-2 text-start">₹ 500.00</td>
            <td className="p-2 text-start text-zinc-500">-</td>
            <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
              ₹ 500.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">ajay***</td>
            <td className="p-2 text-start">₹ 50.00</td>
            <td className="p-2 text-start text-zinc-500">-</td>
            <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
              ₹ 50.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">vino***</td>
            <td className="p-2 text-start">₹ 200.00</td>
            <td className="p-2 text-start text-zinc-500">-</td>
            <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
              ₹ 200.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">ajay***</td>
            <td className="p-2 text-start">₹ 50.00</td>
            <td className="p-2 text-start text-green-500">x 1.32</td>
            <td className="p-2 flex items-center gap-1 text-start text-green-500">
              ₹ 16.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">avis***</td>
            <td className="p-2 text-start">₹ 100.00</td>
            <td className="p-2 text-start text-green-500">x 8.91</td>
            <td className="p-2 flex items-center gap-1 text-start text-green-500">
              ₹ 791.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">vino***</td>
            <td className="p-2 text-start">₹ 200.00</td>
            <td className="p-2 text-start text-zinc-500">-</td>
            <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
              ₹ 200.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">avis***</td>
            <td className="p-2 text-start">₹ 100.00</td>
            <td className="p-2 text-start text-zinc-500">-</td>
            <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
              ₹ 100.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">avis***</td>
            <td className="p-2 text-start">₹ 100.00</td>
            <td className="p-2 text-start text-zinc-500">-</td>
            <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
              ₹ 100.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">vino***</td>
            <td className="p-2 text-start">₹ 200.00</td>
            <td className="p-2 text-start text-zinc-500">-</td>
            <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
              ₹ 200.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">avis***</td>
            <td className="p-2 text-start">₹ 100.00</td>
            <td className="p-2 text-start text-green-500">x 2.97</td>
            <td className="p-2 flex items-center gap-1 text-start text-green-500">
              ₹ 197.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">vino***</td>
            <td className="p-2 text-start">₹ 200.00</td>
            <td className="p-2 text-start text-zinc-500">-</td>
            <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
              ₹ 200.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">avis***</td>
            <td className="p-2 text-start">₹ 100.00</td>
            <td className="p-2 text-start text-zinc-500">-</td>
            <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
              ₹ 100.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">avis***</td>
            <td className="p-2 text-start">₹ 100.00</td>
            <td className="p-2 text-start text-zinc-500">-</td>
            <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
              ₹ 100.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">avis***</td>
            <td className="p-2 text-start">₹ 100.00</td>
            <td className="p-2 text-start text-green-500">x 1.76</td>
            <td className="p-2 flex items-center gap-1 text-start text-green-500">
              ₹ 76.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">vino***</td>
            <td className="p-2 text-start">₹ 200.00</td>
            <td className="p-2 text-start text-zinc-500">-</td>
            <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
              ₹ 200.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">edel***</td>
            <td className="p-2 text-start">₹ 50.00</td>
            <td className="p-2 text-start text-zinc-500">-</td>
            <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
              ₹ 50.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">avis***</td>
            <td className="p-2 text-start">₹ 100.00</td>
            <td className="p-2 text-start text-zinc-500">-</td>
            <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
              ₹ 100.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">edel***</td>
            <td className="p-2 text-start">₹ 50.00</td>
            <td className="p-2 text-start text-zinc-500">-</td>
            <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
              ₹ 50.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">avis***</td>
            <td className="p-2 text-start">₹ 100.00</td>
            <td className="p-2 text-start text-zinc-500">-</td>
            <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
              ₹ 100.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">vino***</td>
            <td className="p-2 text-start">₹ 200.00</td>
            <td className="p-2 text-start text-zinc-500">-</td>
            <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
              ₹ 200.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">edel***</td>
            <td className="p-2 text-start">₹ 50.00</td>
            <td className="p-2 text-start text-zinc-500">-</td>
            <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
              ₹ 50.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">avis***</td>
            <td className="p-2 text-start">₹ 100.00</td>
            <td className="p-2 text-start text-zinc-500">-</td>
            <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
              ₹ 100.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">avis***</td>
            <td className="p-2 text-start">₹ 100.00</td>
            <td className="p-2 text-start text-green-500">x 1.76</td>
            <td className="p-2 flex items-center gap-1 text-start text-green-500">
              ₹ 76.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">91_9***</td>
            <td className="p-2 text-start">₹ 200.00</td>
            <td className="p-2 text-start text-green-500">x 3.13</td>
            <td className="p-2 flex items-center gap-1 text-start text-green-500">
              ₹ 426.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">edel***</td>
            <td className="p-2 text-start">₹ 50.00</td>
            <td className="p-2 text-start text-zinc-500">-</td>
            <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
              ₹ 50.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">avis***</td>
            <td className="p-2 text-start">₹ 100.00</td>
            <td className="p-2 text-start text-zinc-500">-</td>
            <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
              ₹ 100.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">edel***</td>
            <td className="p-2 text-start">₹ 50.00</td>
            <td className="p-2 text-start text-zinc-500">-</td>
            <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
              ₹ 50.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">avis***</td>
            <td className="p-2 text-start">₹ 100.00</td>
            <td className="p-2 text-start text-zinc-500">-</td>
            <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
              ₹ 100.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">vino***</td>
            <td className="p-2 text-start">₹ 200.00</td>
            <td className="p-2 text-start text-zinc-500">-</td>
            <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
              ₹ 200.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">avis***</td>
            <td className="p-2 text-start">₹ 100.00</td>
            <td className="p-2 text-start text-green-500">x 1.76</td>
            <td className="p-2 flex items-center gap-1 text-start text-green-500">
              ₹ 76.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">edel***</td>
            <td className="p-2 text-start">₹ 50.00</td>
            <td className="p-2 text-start text-zinc-500">-</td>
            <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
              ₹ 50.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">91_9***</td>
            <td className="p-2 text-start">₹ 100.00</td>
            <td className="p-2 text-start text-zinc-500">-</td>
            <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
              ₹ 100.00
            </td>
          </tr>
          <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
            <td className="p-2 pl-4 text-start">avis***</td>
            <td className="p-2 text-start">₹ 100.00</td>
            <td className="p-2 text-start text-zinc-500">-</td>
            <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
              ₹ 100.00
            </td>
          </tr>
        </tbody>
      </table>
      <div className="absolute bottom-0 flex items-center justify-center w-full space-x-2 bg-gradient-to-t from-zinc-900 to-transparent">
        <button className="px-4 py-2 text-xs font-medium border rounded-full text-zinc-100 border-zinc-100/10 bg-zinc-800">
          Show All<span className="ml-2 text-zinc-500">70</span>
        </button>
      </div>
    </div>
  );
};

export default LatestBets;
