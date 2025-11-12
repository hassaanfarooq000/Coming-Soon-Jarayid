import { HeaderContent } from "./components/Header";
import MainContent from "./components/MainContent";
import FitToScreen from "./FitToScreen";

export default function Home() {
  return (
    <FitToScreen>
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 mb:16">
        <HeaderContent />
        <MainContent />
      </div>
    </FitToScreen>
  );
}
