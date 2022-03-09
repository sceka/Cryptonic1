import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/HomePage";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import CoinPage from "./pages/CoinPage";
import SimulatorHomePage from "./pages/SimulatorHomePage";
import BuyPage from "./components/BuyPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} exact />

      <Route path="/signin" element={<SignIn />} exact />
      <Route path="/simulator" element={<SimulatorHomePage />} exact />
      <Route path="/simulator/chart/:id" element={<CoinPage />} exact />
      <Route path="/buy/:id" element={<BuyPage />} exact />
    </Routes>
  );
}

export default App;
