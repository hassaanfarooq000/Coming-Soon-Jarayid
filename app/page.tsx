import { HeaderContent } from "./components/Header";
import MainContent from "./components/MainContent";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      <div className="w-full max-w-screen-2xl mx-auto">
        <HeaderContent />
        <MainContent />
      </div>
    </div>
  );
}
