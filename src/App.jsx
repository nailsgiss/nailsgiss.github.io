import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Gallery from './components/sections/Gallery';
import Booking from './components/sections/Booking';
import Contact from './components/sections/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <Gallery />
      <Services />
      <Booking />
      <Contact />
    </Layout>
  );
}

export default App;
