import "./App.css";
import { Routes, Route } from "react-router-dom";
import MyPage from "./components/myPage/MyPage";
import Map from "./components/map/Map";

function App() {
  return (
    <>
      <Routes>
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </>
  );
}

export default App;
