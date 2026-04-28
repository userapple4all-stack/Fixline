import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PartnersPage from './pages/PartnersPage';
import ContactPage from './pages/ContactPage';
import RemoteSupportPage from './pages/RemoteSupportPage';
import ComputerRepairShopPage from './pages/ComputerRepairShopPage';
import TechnicalConsultationPage from './pages/TechnicalConsultationPage';
import SoftwareDeploymentsPage from './pages/SoftwareDeploymentsPage';
import ProductPage from './pages/ProductPage';
import PricingPage from './pages/PricingPage';
import TrainingPage from './pages/TrainingPage';
import SupportCenterPage from './pages/SupportCenterPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white selection:bg-brand-blue selection:text-white overflow-x-hidden flex flex-col">
        {/* Navigation */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/get-a-quote" element={<ContactPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/support" element={<SupportCenterPage />} />
            <Route path="/training" element={<TrainingPage />} />
            <Route path="/products/:productId" element={<ProductPage />} />
            <Route path="/service/remote" element={<RemoteSupportPage />} />
            <Route path="/service/hardware-lab" element={<ComputerRepairShopPage />} />
            <Route path="/service/consult" element={<TechnicalConsultationPage />} />
            <Route path="/service/install" element={<SoftwareDeploymentsPage />} />
            
            {/* SEO Landing Pages (Aliased to existing content) */}
            <Route path="/laptop-repair-kenya" element={<ComputerRepairShopPage />} />
            <Route path="/laptop-repair-nairobi" element={<ComputerRepairShopPage />} />
            <Route path="/laptop-screen-repair" element={<ComputerRepairShopPage />} />
            <Route path="/battery-replacement" element={<ComputerRepairShopPage />} />
            <Route path="/diagnostics" element={<ComputerRepairShopPage />} />
            <Route path="/it-support-kenya" element={<TechnicalConsultationPage />} />
            <Route path="/computer-repair-nairobi" element={<ComputerRepairShopPage />} />
            <Route path="/computer-repair-kenya" element={<ComputerRepairShopPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
