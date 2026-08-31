import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Programs from './components/Programs';
import WhyChooseUs from './components/WhyChooseUs';
import CareerJourney from './components/CareerJourney';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-gray flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <About />
        <Services />
        <Programs />
        <WhyChooseUs />
        <CareerJourney />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
