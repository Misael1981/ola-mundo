import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Pages/Inicio";
import SobreMim from "./Pages/SobreMim";
import Menu from "./Components/Menu";
import Rodape from "./Components/Rodape";
import PaginaPadrao from "./Components/PaginaPadrao";

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<PaginaPadrao />}>
            <Route path="/" element={<Inicio />} />
            <Route path="/sobremim" element={<SobreMim />} />
          </Route>
        </Routes>

        <Rodape />
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
