import './App.css';
import Navbar from "./component/navbar/navbar"
import Welcom from './component/welcom/welcom';
import Features from './component/features/features';
import Family from './component/family/famly';
import Packs from './component/pack/start';
import Movies from './component/movies_api/movies'
import Footer from './component/footer/footer';


function App() {
  return (
      <div>
        <Navbar />
        <Welcom />
        <Features />
        <Family />
        <Packs />
        <Movies />
        <Footer />
      </div>
  );
}

export default App;
