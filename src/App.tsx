import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { ErrorBoundary } from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import LearningPaths from './pages/LearningPaths';
import Blogs from './pages/Blogs';
import Events from './pages/Events';
import Services from './pages/Services';
import AdminBlogs from './pages/admin/AdminBlogs';
import AdminEvents from './pages/admin/AdminEvents';

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Router>
          <div className="flex flex-col min-h-screen bg-dark-200">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/learning-paths" element={<LearningPaths />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/events" element={<Events />} />
                <Route path="/services" element={<Services />} />
                <Route path="/admin/blogs" element={<AdminBlogs />} />
                <Route path="/admin/events" element={<AdminEvents />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  );
}