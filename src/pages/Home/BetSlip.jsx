import { useState } from "react";
import SelectLevel from "./SelectLevel";
import { selectLevelData } from "../../static/selectLevel";

const BetSlip = () => {
  const [selectLevel, setSelectLevel] = useState("extreme");
  const [gridColumn, setGridColumn] = useState(4);
  const data = selectLevelData.filter((item) => item.type === selectLevel);
  const boxLength = {
    easy: 36,
    medium: 27,
    hard: 18,
    extreme: 18,
    nightmare: 24,
  };
  return (
    <div className="lg:w-[60%] w-full lg:h-full flex transition-all xl:max-h-[800px] duration-300 flex-col items-center justify-center lg:py-2 lg:pl-0 px-2 py-1">
      <div
        id="game-container"
        className="relative flex flex-col items-center justify-end w-full h-full overflow-hidden rounded-2xl bg-zinc-800"
        style={{
          pointerEvents: "auto",
          backgroundImage: 'url("/src/assets/img/tower_legend_bg.webp")',
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="z-50 rounded-b px-2 absolute top-0 left-1/2 -translate-x-1/2 text-[8px] text-zinc-700">
          @member502
        </div>
        <div
          className="flex flex-col items-center justify-between w-full gap-2 lg:flex-grow"
          style={{ pointerEvents: "auto" }}
        >
          <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="relative flex flex-col items-center transition-all mt-4 duration-500 justify-center h-full max-w-lg p-2 aspect-square w-5/6">
              <div
                className="grid w-full aspect-square relative items-center bg-zinc-800 justify-center gap-1 p-1 border rounded border-zinc-700"
                style={{ gridTemplateColumns: `repeat(${gridColumn}, 1fr)` }}
              >
                {Array.from({ length: boxLength?.[selectLevel] }).map(
                  (box, i) => {
                    return (
                      <div
                        key={i}
                        className="w-full h-full flex relative items-center justify-center rounded-sm opacity-50"
                        style={{
                          backgroundImage: 'url("/src/assets/img/pattern.png")',
                          backgroundSize: "12px 12px",
                          backgroundRepeat: "repeat",
                        }}
                      />
                    );
                  }
                )}

                <div className="absolute top-0 left-0 flex flex-col-reverse justify-around w-full h-full pointer-events-none">
                  {data?.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="flex items-start transition-all duration-500 justify-center w-full text-sm font-medium border-t-2 rounded-t-sm border-transparent"
                        style={{
                          height: `${
                            item?.type === "extreme" ||
                            item?.type === "nightmare"
                              ? "16.6667"
                              : "11.1111"
                          }%`,
                        }}
                      >
                        <span
                          className="text-[10px] -mt-0.5 text-zinc-300 border-t font-medium transition-all shadow-zinc-900 duration-500 px-2 py-0.5 rounded-t-md -translate-y-full bg-zinc-800 border-zinc-600"
                          style={{ opacity: 1 }}
                        >
                          x {item.price}
                          <svg
                            className="absolute bottom-0 w-2.5 h-2.5 fill-zinc-800 right-0 translate-x-full"
                            width={78}
                            height={78}
                            viewBox="0 0 78 78"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0 0V78H78C34.9218 78 0 43.0782 0 0Z"
                            />
                          </svg>
                          <svg
                            className="absolute bottom-0 w-2.5 h-2.5 fill-zinc-800 left-0 -translate-x-full -rotate-90"
                            width={78}
                            height={78}
                            viewBox="0 0 78 78"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0 0V78H78C34.9218 78 0 43.0782 0 0Z"
                            />
                          </svg>
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <SelectLevel
              setGridColumn={setGridColumn}
              setSelectLevel={setSelectLevel}
            />
          </div>
          <div className="sr-only">
            <img src="/src/assets/img/CrystalGreen.png" alt="Easy crystal" />
            <img src="/src/assets/img/CrystalBlue.png" alt="Medium crystal" />
            <img src="/src/assets/img/CrystalOrange.png" alt="Hard crystal" />
            <img src="/src/assets/img/CrystalLime.png" alt="Extreme crystal" />
            <img
              src="/src/assets/img/CrystalPurple.png"
              alt="NightMare crystal"
            />
            <img src="/src/assets/img/CrystalGrey.png" alt="Idle crystal" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetSlip;
