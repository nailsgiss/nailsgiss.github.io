import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from '../ui/WhatsAppButton';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 transition-colors">
      <Header />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
