import VideosPage from './pages/VideosPage/VideosPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import NewsArticlePage from "./pages/NewsPage/NewsArticlePage";
import ProgramsPage from "./pages/ProgramsPage/ProgramsPage";
import ToolsSummaryPage from "./pages/ToolsPage/ToolsSummaryPage";
import ToolPage from './pages/ToolsPage/ToolPage';
import DecisionToolsPage from './pages/DecisionToolsPage/DecisionToolsPage';
import ClimateToolsPage from './pages/ClimateToolsPage/ClimateToolsPage';
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import ExternalResourcesPage from './pages/ExternalResourcesPage/ExternalResourcesPage';
import ClimateImpactsPage from './pages/ClimateImpactsPage/ClimateImpactsPage';
import ContactPage from './pages/ContactPage/ContactPage';
import NetworkMapPage from './pages/NetworkMapPage/NetworkMapPage';



function App() {
  return (
    <Router>
      <Header/>
          <Routes>
              <Route path="/videos" element={<VideosPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/news/:id" element={<NewsArticlePage />} />
              <Route path="/programs" element={<ProgramsPage />} />
              <Route path="/tools" element={<ToolsSummaryPage />} />
              <Route path="/tools/:id" element={<ToolPage />} />
              <Route path="/tools/decision" element={<DecisionToolsPage />} />
              <Route path="/resources/external" element={<ExternalResourcesPage />} />
              <Route path="/tools/climate" element={<ClimateToolsPage />} />
              <Route path="/climate-impacts" element={<ClimateImpactsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/network" element={<NetworkMapPage />} />
          </Routes>
      <Footer/>
    </Router>
  );
}

export default App;