import "./App.css";
import { Routes, Route } from "react-router-dom";
import MyPage from "./components/myPage/MyPage";
import Map from "./components/map/Map";
import Home from "./components/home/Home";
import QRCamera from "./components/camera/QRcamera";
import TrashcameraPlastic from "./components/camera/TrashCameraPlastic";
import TrashcameraGlass from "./components/camera/TrashCameraGlass";
import TrashcameraMetal from "./components/camera/TrashCameraMetal";
import TrashcameraPaper from "./components/camera/TrashCameraPaper";
import TrashcameraTrash from "./components/camera/TrashCameraTrash";
import Benefit from "./components/benefit/benefit";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <>
      <AnimatePresence>
        <Routes>
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/map" element={<Map />} />
          <Route path="/home" element={<Home />} />
          <Route path="/qrcamera" element={<QRCamera />} />
          <Route path="/trashcamera/glass" element={<TrashcameraGlass />} />
          <Route path="/trashcamera/plastic" element={<TrashcameraPlastic />} />
          <Route path="/trashcamera/metal" element={<TrashcameraMetal />} />
          <Route path="/trashcamera/paper" element={<TrashcameraPaper />} />
          <Route path="/trashcamera/trash" element={<TrashcameraTrash />} />
          <Route path="/benefit" element={<Benefit />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
