import './App.css'
import { Routes, Route } from 'react-router-dom'
import MyPage from './components/myPage/MyPage'


function App() {
  return (
    <>
     <Routes>
      <Route path="/mypage" element={<MyPage />} /> 
     </Routes>
    </>
  )
}

export default App
