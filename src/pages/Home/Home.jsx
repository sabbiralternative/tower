import BetSlip from "./BetSlip";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <main className="w-full h-full max-w-xl mx-auto lg:max-w-[1600px] lg:my-auto">
      <main className="w-full overflow-y-auto h-dvh min-h-dvh">
        <div className="flex flex-col w-full h-full min-h-min xl:justify-center xl:items-center">
          <Navbar />
          <div className="flex flex-col flex-grow w-full lg:flex-row-reverse xl:max-h-[900px]">
            <BetSlip />
            <Sidebar />
          </div>
        </div>
      </main>
    </main>
  );
};

export default Home;
