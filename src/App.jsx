import NavbarComponent from "./componens/NavbarComponent";
import FooterComponen from "./componens/FooterComponen";

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArtikelPage from "./pages/ArtikelPage";
import KontakPage from "./pages/KontakPage";
import VisiMisiPage from "./pages/VisiMisiPage";
import ArtikelDetailPage from "./pages/ArtikelDetailPage";

function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/artikel" element={<ArtikelPage />} />
        <Route path="/visi-misi" element={<VisiMisiPage />} />
        <Route path="/kontak" element={<KontakPage />} />
      </Routes>
      <FooterComponen />
    </>
  );
}

export default App;
