import './App.css';
import { useTranslation } from 'react-i18next';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
function App() {
  const { i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/ar" element={<MainPage />} />
    </Routes>
  );
}

export default App;
