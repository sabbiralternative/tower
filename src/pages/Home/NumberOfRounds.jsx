const NumberOfRounds = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start rounded-md gap-3 transition-all duration-300 overflow-hidden max-h-0 -mt-2 opacity-0">
      <div className="flex flex-col w-full gap-0.5 font-semibold">
        <span className="px-2 text-sm text-zinc-400 font-medium">
          Number of rounds
        </span>
        <div className="flex group items-center w-full gap-1 p-1 rounded-xl border bg-zinc-900 has-[input:focus]:border-green-400 border-zinc-800 text-zinc-300">
          <input
            min={0}
            placeholder="∞"
            className="z-40 w-full p-1 pl-2 bg-transparent border border-transparent focus:outline-none"
            type="numaric"
            defaultValue
          />
          <button
            value={0}
            className="px-4 py-2 h-full text-sm rounded-lg bg-zinc-800 font-medium active:scale-95 text-zinc-400"
          >
            ∞
          </button>
          <button
            value={10}
            className="px-4 py-2 h-full text-sm rounded-lg bg-zinc-800 font-medium active:scale-95 text-zinc-400"
          >
            10
          </button>
          <button
            value={100}
            className="px-4 py-2 h-full text-sm rounded-lg bg-zinc-800 font-medium active:scale-95 text-zinc-400"
          >
            100
          </button>
        </div>
      </div>
      <div className="flex flex-col w-full gap-0.5 font-semibold">
        <div className="flex items-center justify-between font-medium w-full gap-1">
          <span className="px-2 text-sm text-zinc-400">On lose</span>
        </div>
        <div className="flex w-full gap-0.5">
          <div className="flex items-center gap-1 p-1 border rounded-xl bg-zinc-900 border-zinc-800">
            <button
              value="Reset"
              className="px-2 h-full text-xs whitespace-nowrap font-medium rounded-lg active:scale-95 bg-zinc-800 text-zinc-300"
            >
              Reset
            </button>
            <button
              value="Increase By"
              className="px-2 h-full text-xs whitespace-nowrap font-medium rounded-lg active:scale-95 text-zinc-500"
            >
              Increase By
            </button>
          </div>
          <div className="relative flex items-center w-full text-zinc-300 bg-zinc-900 rounded-xl border border-zinc-800 has-[input:focus]:border-red-400">
            <input
              disabled
              placeholder={0}
              className="z-40 w-full p-2 pl-3 bg-transparent disabled:text-zinc-600 border border-transparent focus:outline-none opacity-10"
              type="text"
              defaultValue
            />
            <span className="absolute transform -translate-y-1/2 text-zinc-600 top-1/2 right-2">
              %
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-0.5 font-semibold">
        <div className="flex items-center justify-between w-full font-medium gap-1">
          <span className="px-2 text-sm text-zinc-400">On win</span>
        </div>
        <div className="flex w-full gap-0.5">
          <div className="flex items-center gap-1 p-1 border rounded-xl bg-zinc-900 border-zinc-800">
            <button
              value="Reset"
              className="px-2 h-full text-xs whitespace-nowrap font-medium rounded-lg active:scale-95 bg-zinc-800 text-zinc-300"
            >
              Reset
            </button>
            <button
              value="Increase By"
              className="px-2 h-full text-xs whitespace-nowrap font-medium rounded-lg active:scale-95 text-zinc-500"
            >
              Increase By
            </button>
          </div>
          <div className="relative flex items-center w-full text-zinc-300 bg-zinc-900 rounded-xl border border-zinc-800 has-[input:focus]:border-red-400">
            <input
              disabled
              placeholder={0}
              className="z-40 w-full p-2 pl-3 bg-transparent disabled:text-zinc-600 border border-transparent focus:outline-none opacity-10"
              type="text"
              defaultValue
            />
            <span className="absolute transform -translate-y-1/2 text-zinc-600 top-1/2 right-2">
              %
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-0.5 font-semibold">
        <div className="flex items-center justify-between w-full gap-1">
          <span className="px-2 text-sm text-zinc-400 font-medium">
            Stop on lose
          </span>
        </div>
        <div className="relative overflow-hidden flex items-center w-full text-zinc-300 bg-zinc-900 rounded-xl border has-[input:focus]:border-green-400 border-zinc-800">
          <input
            placeholder={0}
            className="z-40 w-full p-2 pl-3 bg-transparent disabled:text-zinc-600 border border-transparent focus:outline-none"
            type="text"
            defaultValue
          />
          <span
            className="absolute flex items-center font-mono text-xs transform -translate-y-1/2 text-zinc-600 top-1/2 right-2"
            style={{ opacity: 0 }}
          >
            0/0
          </span>
          <div
            className="absolute bottom-0 left-0 flex items-center justify-center h-1 bg-red-400 autoAnimate"
            style={{ opacity: 0 }}
          />
        </div>
      </div>
      <div className="flex flex-col w-full gap-0.5 font-semibold">
        <div className="flex items-center justify-between w-full gap-1">
          <span className="px-2 text-sm text-zinc-400 font-medium">
            Stop on win
          </span>
        </div>
        <div className="relative flex items-center overflow-hidden w-full text-zinc-300 bg-zinc-900 rounded-xl border has-[input:focus]:border-green-400 border-zinc-800">
          <input
            placeholder={0}
            className="z-40 w-full p-2 pl-3 bg-transparent disabled:text-zinc-600 border border-transparent focus:outline-none"
            type="text"
            defaultValue
          />
          <span
            className="absolute font-mono text-xs transform -translate-y-1/2 text-zinc-600 top-1/2 right-2"
            style={{ opacity: 0 }}
          >
            0/0
          </span>
          <div
            className="absolute bottom-0 left-0 flex items-center justify-center h-1 bg-green-400 autoAnimate"
            style={{ opacity: 0 }}
          />
        </div>
      </div>
      <p className="p-2 text-xs tracking-wider text-justify font-semibold text-zinc-500">
        Use of script is optional and players must take full responsibility for
        any attendant risks.We will not be held liable in this regard.
      </p>
    </div>
  );
};

export default NumberOfRounds;
