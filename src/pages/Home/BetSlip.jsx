import { useState } from "react";
import SelectLevel from "./SelectLevel";
import { playBetSound } from "../../utils/sound";

const BetSlip = ({
  setSelectLevel,
  boxes,
  selectLevelData,
  setBoxes,
  setSelectLevelData,
  isBetPlaced,
  data,
  disableCashOutRandom,
  setDisableCashOutRandom,
  clickableBoxForLevel,
  selectLevel,
}) => {
  const [gridColumn, setGridColumn] = useState(4);
  const isCrystalBoxAvailable = boxes?.find((box) => box.crystal);

  const handleClickBox = (box) => {
    playBetSound();
    if (box.mine) {
      const updatedBoxes = boxes?.map((boxObj) => {
        return {
          ...boxObj,
          crystal: boxObj.mine ? false : true,
          roundEnd: true,
          brightNess: boxObj.crystal ? true : false,
          clickable: false,
        };
      });
      setBoxes(updatedBoxes);
      const addBorderToLevelData = selectLevelData.map((item) => {
        return {
          ...item,
          border: false,
          isSelected: true,
        };
      });
      setSelectLevelData(addBorderToLevelData);
      setDisableCashOutRandom(true);
    } else {
      setBoxes((prevBoxes) => {
        const updatedBoxes = [...prevBoxes];

        // Get the index of the clicked box
        const clickedIndex = updatedBoxes.findIndex((b) => b.id === box.id);

        if (clickedIndex === -1) return updatedBoxes; // safety check

        // Step 1: Find the last 4 boxes that are clickable and not selected
        const currentSet = [];
        for (let i = updatedBoxes.length - 1; i >= 0; i--) {
          if (updatedBoxes[i].clickable && !updatedBoxes[i].isSelected) {
            currentSet.push(i);
            if (currentSet.length === clickableBoxForLevel[selectLevel]) break;
          }
        }

        // Step 2: If the clicked box is in that set
        if (currentSet.includes(clickedIndex)) {
          // a) Mark the current 4 boxes as not clickable and selected
          currentSet.forEach((i) => {
            updatedBoxes[i] = {
              ...updatedBoxes[i],
              clickable: false,
              isSelected: true,
              crystal:
                updatedBoxes[i].id === box.id ? true : updatedBoxes[i].crystal,
            };
          });

          // b) Find the next 4 boxes that are not clickable and not selected
          const nextSet = [];
          for (let i = updatedBoxes.length - 1; i >= 0; i--) {
            if (
              !updatedBoxes[i].clickable &&
              !updatedBoxes[i].isSelected &&
              !currentSet.includes(i)
            ) {
              nextSet.push(i);
              if (nextSet.length === clickableBoxForLevel[selectLevel]) break;
            }
          }

          // c) Make the next 4 boxes clickable
          nextSet.forEach((i) => {
            updatedBoxes[i] = {
              ...updatedBoxes[i],
              clickable: true,
            };
          });
        }

        return updatedBoxes;
      });

      const firstNonBorderObj = selectLevelData.find(
        (item) => item.border === false && item.isSelected === false
      );

      const addBorderToLevelData = selectLevelData.map((item) => {
        return {
          ...item,
          border: firstNonBorderObj.id === item.id ? true : false,
          isSelected: firstNonBorderObj.id === item.id ? true : item.isSelected,
        };
      });
      setSelectLevelData(addBorderToLevelData);
    }
  };

  const pickRandom = () => {
    playBetSound();
    const availableClickableBox = boxes
      .filter((box) => box.clickable && !box.isSelected)
      .map((box) => box.id);
    const randomId =
      availableClickableBox[
        Math.floor(Math.random() * availableClickableBox.length)
      ];

    const findBoxByRandomId = boxes.find((box) => box.id === randomId);
    if (findBoxByRandomId.mine) {
      const updatedBoxes = boxes?.map((boxObj) => {
        return {
          ...boxObj,
          crystal: boxObj.mine ? false : true,
          roundEnd: true,
          brightNess: boxObj.crystal ? true : false,
          clickable: false,
        };
      });
      setBoxes(updatedBoxes);
      const addBorderToLevelData = selectLevelData.map((item) => {
        return {
          ...item,
          border: false,
          isSelected: true,
        };
      });
      setSelectLevelData(addBorderToLevelData);
      setDisableCashOutRandom(true);
    } else {
      setBoxes((prevBoxes) => {
        const updatedBoxes = [...prevBoxes];

        // Get the index of the clicked box
        const clickedIndex = updatedBoxes.findIndex(
          (b) => b.id === findBoxByRandomId.id
        );

        if (clickedIndex === -1) return updatedBoxes; // safety check

        // Step 1: Find the last 4 boxes that are clickable and not selected
        const currentSet = [];
        for (let i = updatedBoxes.length - 1; i >= 0; i--) {
          if (updatedBoxes[i].clickable && !updatedBoxes[i].isSelected) {
            currentSet.push(i);
            if (currentSet.length === clickableBoxForLevel[selectLevel]) break;
          }
        }

        // Step 2: If the clicked box is in that set
        if (currentSet.includes(clickedIndex)) {
          // a) Mark the current 4 boxes as not clickable and selected
          currentSet.forEach((i) => {
            updatedBoxes[i] = {
              ...updatedBoxes[i],
              clickable: false,
              isSelected: true,
              crystal:
                updatedBoxes[i].id === findBoxByRandomId.id
                  ? true
                  : updatedBoxes[i].crystal,
            };
          });

          // b) Find the next 4 boxes that are not clickable and not selected
          const nextSet = [];
          for (let i = updatedBoxes.length - 1; i >= 0; i--) {
            if (
              !updatedBoxes[i].clickable &&
              !updatedBoxes[i].isSelected &&
              !currentSet.includes(i)
            ) {
              nextSet.push(i);
              if (nextSet.length === clickableBoxForLevel[selectLevel]) break;
            }
          }

          // c) Make the next 4 boxes clickable
          nextSet.forEach((i) => {
            updatedBoxes[i] = {
              ...updatedBoxes[i],
              clickable: true,
            };
          });
        }

        return updatedBoxes;
      });

      const firstNonBorderObj = selectLevelData.find(
        (item) => item.border === false && item.isSelected === false
      );

      const addBorderToLevelData = selectLevelData.map((item) => {
        return {
          ...item,
          border: firstNonBorderObj.id === item.id ? true : false,
          isSelected: firstNonBorderObj.id === item.id ? true : item.isSelected,
        };
      });
      setSelectLevelData(addBorderToLevelData);
    }
  };

  const handleCashOut = () => {
    playBetSound();
    const findBoxAndUpdate = boxes?.map((box) => ({
      ...box,
      clickable: false,
      crystal: box?.mine ? false : true,
      roundEnd: true,
      isSelected: true,
      brightNess: box.crystal ? true : false,
    }));
    setBoxes(findBoxAndUpdate);
    setSelectLevelData(() => {
      return data;
    });
    setDisableCashOutRandom(true);
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
                {boxes.map((box, i) => {
                  return (
                    <div
                      onClick={() => handleClickBox(box)}
                      key={i}
                      className={`w-full h-full flex relative items-center justify-center rounded-sm ${
                        box.clickable
                          ? "opacity-100 brightness-110 cursor-pointer"
                          : "opacity-50 pointer-events-none"
                      } ${box.brightNess ? "brightness-110" : ""}`}
                      style={{
                        backgroundImage: `${
                          box.brightNess
                            ? "none"
                            : "url('/src/assets/img/pattern.png')"
                        }`,
                        backgroundSize: "12px 12px",
                        backgroundRepeat: "repeat",
                      }}
                    >
                      {box?.crystal && (
                        <div className="absolute h-[150%]  -translate-x-1/2 -translate-y-1/2 aspect-square top-1/2 left-1/2">
                          <img
                            src="/src/assets/img/CrystalGreen.png"
                            className="w-full h-full origin-bottom animate__animated animate__zoomIn animate__faster"
                            alt="Easy crystal"
                          />
                        </div>
                      )}
                      {box.roundEnd && box.mine && (
                        <div className="absolute h-[150%]  -translate-x-1/2 -translate-y-1/2 aspect-square top-1/2 left-1/2">
                          <img
                            src="/src/assets/img/CrystalGrey.png"
                            className="w-full h-full origin-bottom animate__animated animate__zoomIn animate__faster"
                            alt="Easy crystal"
                          />
                        </div>
                      )}
                    </div>
                  );
                })}

                <div className="absolute top-0 left-0 flex flex-col-reverse justify-around w-full h-full pointer-events-none">
                  {selectLevelData?.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className={`flex items-start transition-all duration-500 justify-center w-full text-sm font-medium border-t-2 rounded-t-sm ${
                          item?.border
                            ? " border-green-500"
                            : "border-transparent"
                        }`}
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
              isCrystalBoxAvailable={isCrystalBoxAvailable}
              setGridColumn={setGridColumn}
              setSelectLevel={setSelectLevel}
              isBetPlaced={isBetPlaced}
              pickRandom={pickRandom}
              handleCashOut={handleCashOut}
              disableCashOutRandom={disableCashOutRandom}
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
