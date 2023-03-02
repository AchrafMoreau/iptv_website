import './App.css';
import Navbar from "./component/navbar/navbar"
import Welcom from './component/welcom/welcom';
import Features from './component/features/features';
import Family from './component/family/family';
import Packs from './component/pack/start';
import Movies from './component/pack/new_films/film';

function App() {
  return (
      <div>
        <Navbar />
        <Welcom />
        <Features />
        <Family />
        <Packs />
        <Movies />

      </div>
  );
}

export default App;
