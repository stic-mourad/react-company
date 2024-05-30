
import Banner from './components/banner/Banner';
import Blogs from './components/blogs/Blogs';
import Contact from './components/contact/Contact';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Pricing from './components/pricing/Pricing ';
import Services from './components/services/Services';

function App() {
  return (
    <>
      <Navbar />
      <Banner/>
      <Services/>
      <Content/>
      <Blogs/>
      <Pricing/>
      <Contact/>
      <Footer/>
    
    </>
  );
}
export default App;
