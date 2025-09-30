import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import NewsArticlePage from "./pages/NewsPage/NewsArticlePage";
import ProgramsPage from "./pages/ProgramsPage/ProgramsPage";
import ToolsSummaryPage from "./pages/ToolsPage/ToolsSummaryPage";
import ToolPage from './pages/ToolsPage/ToolPage';
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";


function App() {
  return (
    <Router>
      <Header/>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/news/:id" element={<NewsArticlePage />} />
              <Route path="/programs" element={<ProgramsPage />} />
              <Route path="/tools" element={<ToolsSummaryPage />} />
              <Route path="/tools/:id" element={<ToolPage />} />
          </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
