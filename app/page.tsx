import { HeaderContent } from "./components/Header";
import MainContent from "./components/MainContent";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      <div className="w-full max-w-screen-2xl mx-auto transform origin-top lg:scale-[0.80] lg:origin-top 2xl:scale-[0.70] 2xl:origin-top">
        <HeaderContent />
        <MainContent />
      </div>
    </div>
  );
}
