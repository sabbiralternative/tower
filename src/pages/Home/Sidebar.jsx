import toast from "react-hot-toast";
import LatestBets from "./LatestBets";
import NumberOfRounds from "./NumberOfRounds";

const Sidebar = ({ stake, setStake, handlePlaceBet }) => {
  const handleDecreaseAmount = () => {
    const decreaseAmount = stake / 2;
    if (decreaseAmount < 50) {
      return toast.error("Minimum amount is 50");
    } else {
      setStake(stake / 2);
    }
  };
  const handleIncreaseAmount = () => {
    const decreaseAmount = stake * 2;
    if (decreaseAmount > 10000) {
      return toast.error("Maximum amount is 10000");
    } else {
      setStake(stake * 2);
    }
  };
  return (
    <div className="lg:w-[40%] relative w-full px-2 scrollbar-none lg:overflow-y-auto lg:h-[94dvh]">
      <div className="flex items-center gap-2 px-1 py-2 text-xs font-semibold text-zinc-500">
        <span className="ml-auto">Bet Limits</span>
        <span>50 - 10K</span>
      </div>
      <div className="flex flex-col items-center justify-start w-full text-white rounded-2xl lg:rounded-3xl bg-zinc-800">
        <div className="w-full h-full flex flex-col lg:p-2">
          <div className="flex flex-col gap-2 p-1">
            <div className="grid grid-cols-2 gap-1 lg:grid-cols-1">
              <div className="flex flex-col items-center justify-between w-full gap-[1px]">
                <div className="flex items-center justify-between gap-1 border rounded-t-xl p-1 bg-zinc-900 w-full has-[input:focus]:border-green-400 border-transparent">
                  <button
                    onClick={handleDecreaseAmount}
                    className="flex items-center justify-center w-8 h-6 p-2 text-xs font-medium rounded-lg cursor-pointer lg:w-10 lg:h-10 bg-zinc-800 text-zinc-400 lg:text-base active:scale-95"
                  >
                    1/2
                  </button>
                  <input
                    onChange={(e) => setStake(e.target.value)}
                    placeholder="Amount"
                    className="w-full text-center h-6 bg-transparent outline-none font-semibold"
                    type="text"
                    value={stake ? stake : null}
                  />
                  <button
                    onClick={handleIncreaseAmount}
                    className="flex items-center justify-center w-8 h-6 p-2 text-xs font-medium rounded-lg cursor-pointer lg:w-10 lg:h-10 bg-zinc-800 text-zinc-400 lg:text-base active:scale-95"
                  >
                    2x
                  </button>
                </div>
                <div className="flex items-center justify-between w-full gap-1 p-1 border border-transparent rounded-b-xl bg-zinc-900 text-white/50">
                  <button
                    onClick={() => setStake(250)}
                    className="hidden lg:flex items-center justify-center w-full h-6 text-xs font-medium rounded-lg cursor-pointer lg:h-10 lg:text-base bg-zinc-800 text-zinc-400 active:scale-95"
                  >
                    250
                  </button>
                  <button
                    onClick={() => setStake(500)}
                    className="flex items-center justify-center w-full h-6 text-xs font-medium rounded-lg cursor-pointer lg:h-10 lg:text-base bg-zinc-800 text-zinc-400 active:scale-95"
                  >
                    500
                  </button>
                  <button
                    onClick={() => setStake(5000)}
                    className="flex items-center justify-center w-full h-6 text-xs font-medium rounded-lg cursor-pointer lg:h-10 lg:text-base bg-zinc-800 text-zinc-400 active:scale-95"
                  >
                    5K
                  </button>
                  <button
                    onClick={() => setStake(10000)}
                    className="flex items-center justify-center w-full h-6 text-xs font-medium rounded-lg cursor-pointer lg:h-10 lg:text-base bg-zinc-800 text-zinc-400 active:scale-95"
                  >
                    10K
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-center w-full h-full gap-1 select-none overflow-hidden">
                <button className="w-full h-full flex-grow p-4 rounded-xl font-bold active:scale-[0.99] cursor-pointer whitespace-nowrap bg-zinc-800 text-zinc-400 hidden lg:flex items-center justify-center border-4 border-zinc-900">
                  ALL IN
                </button>
                <button
                  onClick={handlePlaceBet}
                  className="relative w-full h-full flex-grow p-4 font-bold overflow-hidden rounded-xl active:scale-[0.99] cursor-pointer whitespace-nowrap"
                  style={{
                    background:
                      "linear-gradient(to right,rgb(87, 222, 119),rgb(2, 185, 121),rgb(2, 185, 121))",
                  }}
                >
                  BET
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between w-full p-1 rounded-md">
              <div className="flex items-center justify-start w-1/2 gap-2" />
              <div className="flex items-center justify-center gap-2 text-white/50">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-zinc-300"
                  >
                    <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                    <path d="M12 8v4" />
                    <path d="M12 16h.01" />
                  </svg>
                </button>
                <button className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-zinc-300"
                  >
                    <path d="M15 8a5 5 0 0 1 0 8" />
                    <path d="M17.7 5a9 9 0 0 1 0 14" />
                    <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />
                  </svg>
                </button>
              </div>
            </div>
            {/* This component opacity is zero. So it is not visible in ui */}
            <NumberOfRounds />
          </div>
        </div>
      </div>

      <LatestBets />
    </div>
  );
};

export default Sidebar;
