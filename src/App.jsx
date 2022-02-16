import HomePage from "./pages/homepage/homepage.component";
import { Route, Routes } from "react-router-dom";

const HatsPage = () => {
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
};

export const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/hats" element={<HatsPage />} />
      </Routes>
    </div>
  );
};
