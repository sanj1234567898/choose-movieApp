import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import WatchList from "./components/WatchList";
import Watched from "./components/Watched";
import Add from "./components/Add";
import "./lib/font-awesome/css/all.min.css";
import { NotFound } from "./components/NotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<WatchList />} />

        <Route path="/watched" element={<Watched />} />

        <Route path="/add" element={<Add />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
