import "./index.css";
import "./base.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FilmGrid from "./pages/FilmGrid";
import MainLayout from "./Layouts/MainLayout";
import { Toaster } from "sonner";
import Snowfall from "react-snowfall";

function App() {
  return (
    <>
      <Snowfall
        snowflakeCount={15}
        speed={[0, 0.5]}
        wind={[-0.5, 1]}
        radius={[1, 2]}
        changeFrequency={240}
        rotationSpeed={[-1.0, -1.5]}
        style={{
          position: "fixed",
          zIndex: 20,
          height: "100svh",
          width: "100%",
        }}
      />
      {/* Toast messages */}
      <Toaster richColors position="top-center" visibleToasts={4} />
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<FilmGrid />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
