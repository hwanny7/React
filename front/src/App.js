import { Route, Routes } from 'react-router-dom';

import 'App.css';
import Layout from 'pages/Layout';
import Home from 'pages/Home';
import MyPage from 'pages/MyPage'
import Cash from 'pages/Cash'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/cash" element={<Cash />} />
      </Route>
    </Routes>
  );
}

export default App;
