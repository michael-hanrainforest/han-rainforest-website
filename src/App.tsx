/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import RimbaParkResort from "./pages/RimbaParkResort";
import EsgEcotourism from "./pages/EsgEcotourism";
import Csr from "./pages/Csr";
import Destinations from "./pages/Destinations";
import Packages from "./pages/Packages";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import ContactUs from "./pages/ContactUs";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/rimba-park-resort" element={<RimbaParkResort />} />
            <Route path="/esg-ecotourism" element={<EsgEcotourism />} />
            <Route path="/csr" element={<Csr />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:slug" element={<ArticleDetail />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
