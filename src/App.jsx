import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import "./Sass/Main.scss";

export default function App() {
  return (
    <>
      <BrowserRouter basename="/register">
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
