import './index.css';
import Hero from './components/Hero';
import HowItWorks from './components/index1.jsx';
import WhyChooseUs from './components/index2.jsx';
import Testimonials from './components/Testimonials.jsx';
import ContactForm from './components/index3.jsx';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-sans">
      <DarkModeToggle />
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
    </div>
  );
}

export default App;
