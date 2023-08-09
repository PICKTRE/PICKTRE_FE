import "./App.css";
import { Routes, Route } from "react-router-dom";
import MyPage from "./components/myPage/MyPage";
import Home from "./components/home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
