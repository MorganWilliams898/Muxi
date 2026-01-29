import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Steps from './sections/Steps';
import About from './sections/About';
import Courses from './sections/Courses';
import Testimonials from './sections/Testimonials';
import Blog from './sections/Blog';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Steps />
        <About />
        <Courses />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

export default App;
