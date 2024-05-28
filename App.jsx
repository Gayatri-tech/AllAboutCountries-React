import Header from "./components/Header";
import { Outlet } from "react-router-dom";

import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <Outlet />
    </ThemeProvider>
  );
}
