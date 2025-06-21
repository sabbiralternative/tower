import { useState } from "react";
import BetSlip from "./BetSlip";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useOrderMutation } from "../../redux/features/events/events";
import { generateRoundId } from "../../utils/generateRoundId";
import toast from "react-hot-toast";
import { selectLevelItems } from "../../static/selectLevel";

const Home = () => {
  const [selectLevel, setSelectLevel] = useState("easy");
  const [addOrder] = useOrderMutation();
  const [stake, setStake] = useState(0);
  const [isBetPlaced, setIsBetPlaced] = useState(false);
  const data = selectLevelItems.filter((item) => item.type === selectLevel);

  const boxLength = {
    easy: 36,
    medium: 27,
    hard: 18,
    extreme: 18,
    nightmare: 24,
  };

  const boxArray = Array.from({ length: boxLength?.[selectLevel] }, (_, i) => ({
    name: `box${i + 1}`,
    clickable: false,
    id: i + 1,
    crystal: false,
    mine: (i + 1) % 4 === 0,
    roundEnd: false,
    brightNess: false,
    isSelected: false,
  }));
  const [boxes, setBoxes] = useState(boxArray);
  const [selectLevelData, setSelectLevelData] = useState(data);

  const handlePlaceBet = async () => {
    if (stake) {
      setBoxes(() => {
        return boxArray;
      });
      setSelectLevelData(() => {
        return data;
      });
      const round_id = generateRoundId();
      sessionStorage.removeItem("round_id");
      sessionStorage.setItem("round_id", round_id);
      const level =
        selectLevel.charAt(0).toUpperCase() +
        selectLevel.slice(1).toLowerCase();
      const payload = [
        {
          eventId: 20003,
          eventName: "Tower Legend",
          isback: 0,
          stake,
          type: "bet",
          level,
          round_id,
        },
      ];

      const res = await addOrder(payload).unwrap();
      // console.log(res);
      if (res?.success) {
        setIsBetPlaced(true);
        setTimeout(() => {
          let recentResult = [];
          const recentStoredResult = localStorage.getItem("recentResult");
          if (recentStoredResult) {
            recentResult = JSON.parse(recentStoredResult);
          }
          //push
          localStorage.setItem("recentResult", JSON.stringify(recentResult));
        }, 500);
      } else {
        const firstNonBorderObj = data.find(
          (item) => item.border === false && item.isSelected === false
        );

        const addBorderToLevelData = data.map((item) => ({
          ...item,
          border: firstNonBorderObj.id === item.id ? true : item.border,
          isSelected: firstNonBorderObj.id === item.id ? true : item.border,
        }));
        setSelectLevelData(addBorderToLevelData);

        setBoxes((prevBoxes) => {
          const updatedBoxes = [...prevBoxes]; // copy of state
          const falseIndexes = [];

          // Find all indexes where clickable === false
          for (let i = updatedBoxes.length - 1; i >= 0; i--) {
            if (!updatedBoxes[i].clickable && !updatedBoxes[i].isSelected) {
              falseIndexes.push(i);
            }
          }

          // If at least 3 non-clickable items exist
          if (falseIndexes.length >= 4) {
            // Take the *last* 3 (from the end of the array, i.e. the first 3 in falseIndexes array)
            const indexesToUpdate = falseIndexes.slice(0, 4);

            indexesToUpdate.forEach((i) => {
              updatedBoxes[i] = {
                ...updatedBoxes[i],
                clickable: true, // or any other modification
              };
            });
          }

          return updatedBoxes;
        });

        setIsBetPlaced(true);
        toast.error(res?.Message);
      }
    } else {
      toast.error("Amount is required");
    }
  };

  return (
    <main className="w-full h-full max-w-xl mx-auto lg:max-w-[1600px] lg:my-auto">
      <main className="w-full overflow-y-auto h-dvh min-h-dvh">
        <div className="flex flex-col w-full h-full min-h-min xl:justify-center xl:items-center">
          <Navbar />
          <div className="flex flex-col flex-grow w-full lg:flex-row-reverse xl:max-h-[900px]">
            <BetSlip
              setSelectLevelData={setSelectLevelData}
              boxes={boxes}
              selectLevelData={selectLevelData}
              setBoxes={setBoxes}
              isBetPlaced={isBetPlaced}
              selectLevel={selectLevel}
              setSelectLevel={setSelectLevel}
            />
            <Sidebar
              handlePlaceBet={handlePlaceBet}
              stake={stake}
              setStake={setStake}
            />
          </div>
        </div>
      </main>
    </main>
  );
};

export default Home;
