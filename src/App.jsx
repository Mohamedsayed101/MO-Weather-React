// Tailwind Styles
import './index.css';

// Page Layout
import MainLayout from "./Layouts/MainLayout/MainLayout";

// Pages
import Home from "./Pages/Home/Home";
import News from "./Pages/News/News";
import LiveCameras from "./Pages/LiveCameras/LiveCameras";
import Photos from "./Pages/Photos/Photos";
import Contact from "./Pages/Contact/Contact";
import NotFound from "./Pages/NotFound/NotFound";

// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Loader Wrapper
import RouteWrapper from "./Utils/RouteWrapper/RouteWrapper";

function App() {
  return (
    <Router>
      <MainLayout>
        <RouteWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/live-cameras" element={<LiveCameras />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </RouteWrapper>
      </MainLayout>
    </Router>
  );
}

export default App;
