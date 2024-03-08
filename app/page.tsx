import Mission from "@/components/colums/mission";

import NavBar from "@/components/navbar/navbar";
import PastEvent from "@/components/past-event";
import WeeklyActivities from "@/components/weely-activities";


export default function Home() {
  return (
  <div className="space-y-2">
     <NavBar />
     <Mission />
    <div className="w-[1100px] h-1 mx-auto bg-yellow-500 px-4"/>
    <WeeklyActivities />
    <PastEvent />
    
  </div>
  );
}
