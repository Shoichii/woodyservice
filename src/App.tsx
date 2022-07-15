import { Route, Routes } from 'react-router-dom';
import './App.css';
import { MainPage } from './components/MainPage/MainPage';
import { ServicesPage } from './components/ServicesPage/ServicesPage';

export const App = () => {
  return (
    <div className="App">
      <Routes>
          <Route path = '/' element = {<MainPage/>} />
          <Route path = '/services' element = {<ServicesPage/>} />
      </Routes>
    </div>
  );
}

