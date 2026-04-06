import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trends from './components/Trends';
import ResearchLab from './components/ResearchLab';
import Features from './components/Features';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-dark text-white selection:bg-primary selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Trends />
        <ResearchLab />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
