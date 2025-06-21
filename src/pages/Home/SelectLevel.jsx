import { useEffect, useState } from "react";

const SelectLevel = ({ setSelectLevel, setGridColumn }) => {
  const [translateY, setTranslateY] = useState(0);

  const handleTranslate = (type) => {
    if (type === "right") {
      if (translateY === -80) {
        setTranslateY(0);
      } else {
        setTranslateY((prev) => prev - 20);
      }
    } else {
      if (translateY === 0) {
        setTranslateY(-80);
      } else {
        setTranslateY((prev) => prev + 20);
      }
    }
  };

  useEffect(() => {
    if (translateY === 0) {
      setGridColumn(4);
      setSelectLevel("easy");
    }
    if (translateY === -20) {
      setGridColumn(3);
      setSelectLevel("medium");
    }
    if (translateY === -40) {
      setGridColumn(2);
      setSelectLevel("hard");
    }
    if (translateY === -60) {
      setGridColumn(3);
      setSelectLevel("extreme");
    }
    if (translateY === -80) {
      setGridColumn(4);
      setSelectLevel("nightmare");
    }
  }, [translateY, setSelectLevel, setGridColumn]);
  return (
    <div className="relative w-full max-w-xl mx-auto h-fit">
      <div
        className="w-full relative transition-all top-0 left-0 max-w-xl mx-auto"
        style={{
          pointerEvents: "none",
          transform: `translateY(0px)`,
          opacity: 1,
          transitionDelay: "1s",
        }}
      >
        <div
          className="relative w-full max-w-xl mx-auto transition-all"
          style={{ pointerEvents: "auto" }}
        >
          <div className="z-20 flex items-center justify-between w-full p-1 rounded-t-2xl">
            <button
              onClick={() => handleTranslate("left")}
              className="flex items-center justify-center flex-grow"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-10 h-10 fill-current text-zinc-400"
              >
                <path d="M14 6l-6 6l6 6v-12" />
              </svg>
            </button>
            <div className="flex z-20 flex-col border w-3/4 rounded-xl p-1 border-transparent bg-zinc-800">
              <div className="flex items-center justify-center w-full p-1 pl-2 text-xs">
                <span className="font-semibold text-green-400">
                  Select Level
                </span>
              </div>
              <div className="w-full overflow-hidden text-xs">
                <div
                  className="flex transition-transform duration-300"
                  style={{
                    transform: `translateX(${translateY}%)`,
                    width: "500%",
                  }}
                >
                  <div
                    className="flex items-center justify-between text-zinc-200 text-sm font-medium rounded-lg p-2 px-3 bg-zinc-900 transition-all shrink-0"
                    style={{ width: "20%" }}
                  >
                    <span className="text-green-400 flex items-center gap-1 font-bold">
                      <img
                        src="/src/assets/img/CrystalGreen.png"
                        className="w-8 h-8"
                        alt="Easy crystal"
                      />
                      Easy
                    </span>
                    <div className="flex items-center h-8 gap-1">
                      <div className="bg-zinc-700 aspect-square rounded-sm">
                        <img
                          src="/src/assets/img/CrystalGrey.png"
                          className="w-6 h-6"
                          alt="Idle crystal"
                        />
                      </div>
                      <div className="bg-zinc-700 aspect-square rounded-sm">
                        <img
                          src="/src/assets/img/CrystalGreen.png"
                          className="w-6 h-6"
                          alt="Easy crystal"
                        />
                      </div>
                      <div className="bg-zinc-700 aspect-square rounded-sm">
                        <img
                          src="/src/assets/img/CrystalGreen.png"
                          className="w-6 h-6"
                          alt="Easy crystal"
                        />
                      </div>
                      <div className="bg-zinc-700 aspect-square rounded-sm">
                        <img
                          src="/src/assets/img/CrystalGreen.png"
                          className="w-6 h-6"
                          alt="Easy crystal"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex items-center justify-between text-zinc-200 text-sm font-medium rounded-lg p-2 px-3 bg-zinc-900 transition-all shrink-0"
                    style={{ width: "20%" }}
                  >
                    <span className="text-blue-400 flex items-center gap-1 font-bold">
                      <img
                        src="/src/assets/img/CrystalBlue.png"
                        className="w-8 h-8"
                        alt="Medium crystal"
                      />
                      Medium
                    </span>
                    <div className="flex items-center h-8 gap-1">
                      <div className="bg-zinc-700 aspect-square rounded-sm">
                        <img
                          src="/src/assets/img/CrystalGrey.png"
                          className="w-6 h-6"
                          alt="Idle crystal"
                        />
                      </div>
                      <div className="bg-zinc-700 aspect-square rounded-sm">
                        <img
                          src="/src/assets/img/CrystalBlue.png"
                          className="w-6 h-6"
                          alt="Medium crystal"
                        />
                      </div>
                      <div className="bg-zinc-700 aspect-square rounded-sm">
                        <img
                          src="/src/assets/img/CrystalBlue.png"
                          className="w-6 h-6"
                          alt="Medium crystal"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex items-center justify-between text-zinc-200 text-sm font-medium rounded-lg p-2 px-3 bg-zinc-900 transition-all shrink-0"
                    style={{ width: "20%" }}
                  >
                    <span className="text-orange-400 flex items-center gap-1 font-bold">
                      <img
                        src="/src/assets/img/CrystalOrange.png"
                        className="w-8 h-8"
                        alt="Hard crystal"
                      />
                      Hard
                    </span>
                    <div className="flex items-center h-8 gap-1">
                      <div className="bg-zinc-700 aspect-square rounded-sm">
                        <img
                          src="/src/assets/img/CrystalGrey.png"
                          className="w-6 h-6"
                          alt="Idle crystal"
                        />
                      </div>
                      <div className="bg-zinc-700 aspect-square rounded-sm">
                        <img
                          src="/src/assets/img/CrystalOrange.png"
                          className="w-6 h-6"
                          alt="Hard crystal"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex items-center justify-between text-zinc-200 text-sm font-medium rounded-lg p-2 px-3 bg-zinc-900 transition-all shrink-0"
                    style={{ width: "20%" }}
                  >
                    <span className="text-lime-400 flex items-center gap-1 font-bold">
                      <img
                        src="/src/assets/img/CrystalLime.png"
                        className="w-8 h-8"
                        alt="Extreme crystal"
                      />
                      Extreme
                    </span>
                    <div className="flex items-center h-8 gap-1">
                      <div className="bg-zinc-700 aspect-square rounded-sm">
                        <img
                          src="/src/assets/img/CrystalGrey.png"
                          className="w-6 h-6"
                          alt="Idle crystal"
                        />
                      </div>
                      <div className="bg-zinc-700 aspect-square rounded-sm">
                        <img
                          src="/src/assets/img/CrystalGrey.png"
                          className="w-6 h-6"
                          alt="Idle crystal"
                        />
                      </div>
                      <div className="bg-zinc-700 aspect-square rounded-sm">
                        <img
                          src="/src/assets/img/CrystalLime.png"
                          className="w-6 h-6"
                          alt="Extreme crystal"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex items-center justify-between text-zinc-200 text-sm font-medium rounded-lg p-2 px-3 bg-zinc-900 transition-all shrink-0"
                    style={{ width: "20%" }}
                  >
                    <span className="text-purple-400 flex items-center gap-1 font-bold">
                      <img
                        src="/src/assets/img/CrystalPurple.png"
                        className="w-8 h-8"
                        alt="Nightmare crystal"
                      />
                      Nightmare
                    </span>
                    <div className="flex items-center h-8 gap-1">
                      <div className="bg-zinc-700 aspect-square rounded-sm">
                        <img
                          src="/src/assets/img/CrystalGrey.png"
                          className="w-6 h-6"
                          alt="Idle crystal"
                        />
                      </div>
                      <div className="bg-zinc-700 aspect-square rounded-sm">
                        <img
                          src="/src/assets/img/CrystalGrey.png"
                          className="w-6 h-6"
                          alt="Idle crystal"
                        />
                      </div>
                      <div className="bg-zinc-700 aspect-square rounded-sm">
                        <img
                          src="/src/assets/img/CrystalGrey.png"
                          className="w-6 h-6"
                          alt="Idle crystal"
                        />
                      </div>
                      <div className="bg-zinc-700 aspect-square rounded-sm">
                        <img
                          src="/src/assets/img/CrystalPurple.png"
                          className="w-6 h-6"
                          alt="Nightmare crystal"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => handleTranslate("right")}
              className="flex items-center justify-center flex-grow"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-10 h-10 fill-current text-zinc-400"
              >
                <path d="M10 18l6 -6l-6 -6v12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className="absolute top-0 left-0 flex flex-col justify-end w-full h-full gap-1 transition-all"
        style={{
          transform: "translateY(80px)",
          pointerEvents: "none",
          opacity: 0,
          transitionDelay: "1s",
        }}
      >
        <div
          className="flex w-full items-center justify-center relative overflow-hidden text-sm font-medium"
          style={{ opacity: 0 }}
        >
          <div className="flex w-1/3 p-1 items-center justify-center transition-all duration-500 bg-gradient-to-r text-amber-500">
            0 x
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 text-amber-500"
          >
            <path d="M7 7l5 5l-5 5" />
            <path d="M13 7l5 5l-5 5" />
          </svg>
          <div className="flex w-1/3 p-1 gap-1 items-center text-zinc-100 justify-center transition-all duration-500 bg-gradient-to-r">
            0 x
          </div>
        </div>
        <div className="flex w-full gap-2 p-2 text-xs rounded-t-2xl bg-zinc-800">
          <button
            className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 border border-amber-600 transition-all text-white px-4 py-3 rounded-lg active:scale-95 font-bold w-full disabled:opacity-50"
            disabled
          >
            CASHOUT
          </button>
          <button
            className="bg-zinc-500 border border-zinc-600 transition-all text-white px-4 py-3 rounded-lg active:scale-95 font-bold w-full disabled:opacity-50"
            disabled
          >
            PICK RANDOM
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectLevel;
