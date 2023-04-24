import { Routes, Route } from "react-router-dom";
import "./styles/App.scss";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import Metrics from "./pages/Metrics";
import TrainingList from "./components/training/TrainingList";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="training" element={<TrainingList />} />
        <Route path="metrics" element={<Metrics />} />
      </Route>
    </Routes>
  );
};

export default App;
