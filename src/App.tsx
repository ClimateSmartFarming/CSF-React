import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import ProgramsPage from "./pages/ProgramsPage/ProgramsPage";
import ToolsPage from "./pages/ToolsPage/ToolsPage";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";

function App() {
  return (
    <Router>
      <Header />
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/programs" element={<ProgramsPage />} />
              <Route path="/tools" element={<ToolsPage />} />
          </Routes>
      <Footer />
    </Router>
  );
}

export default App;
