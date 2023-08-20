import "./App.css";
import { Routes, Route } from "react-router-dom";
import MyPage from "./components/myPage/MyPage";
import Map from "./components/map/Map";
import Home from "./components/home/Home"
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <>
      <AnimatePresence>
        <Routes>
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/map" element={<Map />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
