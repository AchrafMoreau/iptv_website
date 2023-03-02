import './App.css';
import Navbar from "./component/navbar/navbar"
import Welcom from './component/welcom/welcom';
import Features from './component/features/features';
import Family from './component/family/family';

function App() {
  return (
      <div>
        <Navbar />
        <Welcom />
        <Features />
        <Family />
      </div>
  );
}

export default App;
