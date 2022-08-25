import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import WeatherForecast from './components/WeatherForecast';
import Convertor from './components/Convertor';
import './App.css';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weatherForecast" element={<WeatherForecast />} />
        <Route path="/convertor" element={<Convertor />} />
      </Routes>
    </div>
  );
}

export default App;
