import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Pages/Inicio";
import SobreMim from "./Pages/SobreMim";
import Menu from "./Components/Menu";
import Rodape from "./Components/Rodape";

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobremim" element={<SobreMim />} />
        </Routes>

        <Rodape />
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
