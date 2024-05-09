import ButtonGradient from './assets/svg/ButtonGradient';
import './App.css'
import Button from './Components/Button';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Benefits from './Components/Benefits';

const App = () => {
  return (
  <>
        <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
           <Header/>
           <Hero/>
           <Benefits/>
        </div>
          <ButtonGradient/>
    </>
  );
};

export default App
