import Navbar from "./component/navbar/navbar"
import Welcom from './component/welcom/welcom';
import Features from './component/features/features';
import Family from './component/family/famly';
import Packs from './component/pack/start';
import Movies from './component/movies_api/movies'
import Footer from './component/footer/footer';
import AboutUs from "./component/aboutUs/aboutUs";
import Faq from "./component/FAQ/faq";
import Contact from "./component/contact/contact";
import { Route, Routes } from 'react-router-dom';
import Count from "./component/count/count";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<> 
            <Welcom />
            <Features /> 
            <Family /> 
            <Movies />
            <Count />
            <Packs /> 
            <Footer />
            </>}>
        </Route>
        <Route path="/aboutUs" element={<>
            <AboutUs />
            <Footer />
            </>}>
        </Route>
        <Route path="/FAQ" element={<> 
            <Faq />
            <Footer />
            </>}>
        </Route>
        <Route path="/contact" element={<>
            <Contact /> 
            <Footer />
            </>}>
        </Route>
      </Routes>
    </>
  );
}

export default App;
