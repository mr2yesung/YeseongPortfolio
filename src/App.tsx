import { Route, Routes } from "react-router-dom";
import PageLayout from "./components/layout/PageLayout";
import { DarkModeProvider } from "./hooks/DarkModeContext";

// todo: implement download cv
function App() {
  return (
    <DarkModeProvider>
      <Routes>
        <Route path="/" element={<PageLayout />}></Route>
      </Routes>
    </DarkModeProvider>
  );
}

export default App;
