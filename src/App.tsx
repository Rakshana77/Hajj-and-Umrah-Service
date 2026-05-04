import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PackagesPage from './components/PackagesPage';
import PackageDetailPage from './components/PackageDetailPage';
import ReviewsPage from './components/ReviewsPage';
import Login from './pages/Login';
import Admin from './pages/Admin';
import ProtectedRoute from './routes/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

// Page Transition Wrapper
const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/packages" element={<PageTransition><PackagesPage /></PageTransition>} />
        <Route path="/packages/:id" element={<PageTransition><PackageDetailPage /></PageTransition>} />
        <Route path="/reviews" element={<PageTransition><ReviewsPage /></PageTransition>} />
        
        {/* Admin Routes */}
        <Route path="/login" element={<Login />} />
        <Route 
          path="/secure-admin-portal-786" 
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
};

function AppContent() {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/secure-admin-portal-786') || location.pathname === '/login';

  return (
    <div className="min-h-screen bg-neutral-50 overflow-x-hidden">
      {!isAdminPage && <Navbar />}
      
      <AnimatedRoutes />

      {!isAdminPage && <Footer />}

      {/* Global Floating WhatsApp CTA */}
      {!isAdminPage && (
        <a 
          className="fixed bottom-8 right-8 bg-[#F4C430] text-neutral-900 p-4 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 group" 
          href="https://wa.me/918048102586"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="material-symbols-outlined text-3xl">chat</span>
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-3 transition-all duration-300 font-bold uppercase text-[10px] tracking-widest">WhatsApp Us</span>
        </a>
      )}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
