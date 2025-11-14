import { HeaderContent } from "./components/Header";
import MainContent from "./components/MainContent";

export default function Home() {
  return (
    <div className="w-full min-h-screen lg:h-screen bg-white lg:overflow-hidden">
      {/* Removed transform scaling - using responsive max-width instead */}
      <div className="w-full max-w-[1400px] xl:max-w-[1500px] 2xl:max-w-[1600px] mx-auto">
        <HeaderContent />
        <MainContent />
      </div>
    </div>
  );
}