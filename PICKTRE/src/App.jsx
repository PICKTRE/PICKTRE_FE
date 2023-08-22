import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import MyPage from "./components/myPage/MyPage";
import Point from "./components/point/Point";
import Map from "./components/map/Map";
import Home from "./components/home/Home";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/point" element={<Point />} />
          <Route path="/map" element={<Map />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
