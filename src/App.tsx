import { Route, Routes } from "react-router-dom";
import PageLayout from "./components/layout/PageLayout";
import { DarkModeProvider } from "./hooks/DarkModeContext";
import Home from "./pages/home/Home";

// todo: implement download cv
function App() {
  return (
    <DarkModeProvider>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </DarkModeProvider>
  );
}

export default App;
