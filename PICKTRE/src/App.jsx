import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import MyPage from "./components/myPage/MyPage";
import Point from "./components/point/Point";
import Map from "./components/map/Map";
import Home from "./components/home/Home";
import QRCamera from "./components/camera/QRcamera";
import TrashcameraPlastic from "./components/camera/TrashCameraPlastic";
import TrashcameraGlass from "./components/camera/TrashCameraGlass";
import TrashcameraMetal from "./components/camera/TrashCameraMetal";
import TrashcameraPaper from "./components/camera/TrashCameraPaper";
import TrashcameraTrash from "./components/camera/TrashCameraTrash";
import Store from "./components/store/Store";
import ActivityReport from "./components/myUseReport/MyUseReport";
import TrashcameraMedical from "./components/camera/TrashCameraMedical";
import Benefit from "./components/benefit/Benefit";
import Ranking from "./components/ranking/Ranking";
import InviteFriends from "./components/inviteFriends/InviteFriends";
import Notice from "./components/notice/Notice";
import Qna from "./components/qna/Qna";
import RedirectPage from "./components/landingPage/RedirectPage";
import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const getMemberIdFromLocalStorage = () => {
    return localStorage.getItem("memberId");
  };

  const memberId = getMemberIdFromLocalStorage();

  // memberId가 없으면 LandingPage로 리디렉션
  if (!memberId) {
    alert("로그인이 필요한 서비스입니다.");
    return navigate("/");
  }

  return (
    <>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/point" element={<Point />} />
          <Route path="/map" element={<Map />} />
          <Route path="/home" element={<Home />} />
          <Route path="/qrcamera" element={<QRCamera />} />
          <Route path="/trashcamera/glass" element={<TrashcameraGlass />} />
          <Route path="/trashcamera/plastic" element={<TrashcameraPlastic />} />
          <Route path="/trashcamera/metal" element={<TrashcameraMetal />} />
          <Route path="/trashcamera/paper" element={<TrashcameraPaper />} />
          <Route path="/trashcamera/trash" element={<TrashcameraTrash />} />
          <Route path="/trashcamera/medical" element={<TrashcameraMedical />} />
          <Route path="/benefit" element={<Benefit />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/store" element={<Store />} />
          <Route path="/activity-report" element={<ActivityReport />} />
          <Route path="/invite-friends" element={<InviteFriends />}></Route>
          <Route path="/notice" element={<Notice />}></Route>
          <Route path="/qna" element={<Qna />}></Route>
          <Route path="/oauth/redirected/google" element={<RedirectPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
