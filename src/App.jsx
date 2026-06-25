import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
