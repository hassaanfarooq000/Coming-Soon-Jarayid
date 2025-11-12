import { HeaderContent } from "./components/Header";
import MainContent from "./components/MainContent";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white overflow-hidden">
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <HeaderContent />
        <MainContent />
      </div>
    </div>
  );
}
