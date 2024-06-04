import { Route, Routes } from "react-router-dom";
import PageLayout from "./components/layout/PageLayout";
import { DarkModeProvider } from "./hooks/DarkModeContext";
import Home from "./pages/home/Home";
import Resume from "./pages/resume/Resume";
import Works from "./pages/works/Works";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/not-found/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// todo: implement download cv
function App() {
  return (
    <>
      <DarkModeProvider>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<Home />} />
            <Route path="resume" element={<Resume />} />
            <Route path="works" element={<Works />} />
            <Route path="contact" element={<Contact />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </DarkModeProvider>

      <ToastContainer />
    </>
  );
}

export default App;
