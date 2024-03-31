import MeetingTypeList from "@/components/MeetingTypeList";
import React from "react";
/* const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  const time = currentTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    currentTime
  ); */
const Home = () => {
  const now = new Date()

  const time = now.toLocaleTimeString('en-US',{hour: '2-digit', minute: '2-digit'})
  const date = (new Intl.DateTimeFormat('en-US',{dateStyle:'full'})).format(now)
  return (
     <section className="flex flex-col gap-10 text-white">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between px-5 py-8 md:px-11">
          <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal">
            Upcoming meet at: 12:30 PM
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-extrabold md:text-4xl lg:text-7xl">
              {time}
            </h1>
            <p className="text-lg font-medium md:text-xl lg:text-2xl text-sky-1">
              {date}
            </p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
