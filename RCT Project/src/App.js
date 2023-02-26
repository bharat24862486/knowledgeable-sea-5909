import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Main from './Components/Main';
import Footer from './LittleCompo/Footer';
import { AppContext } from './Context/AppContext';
import AppContextProvider from './Context/AppContext';
import Login from './Components/Login';
import { BrowserRouter } from 'react-router-dom';
import ROUTES from './Routes/ROUTES';
import LINKS from './Components/LINKS';
import Engagement from './Components/Engagement';

function App() {

  return (
    
      <AppContextProvider>
        <div>
        <NavBar />
          <ROUTES />
          
          
          {/* <Engagement /> */}
          {/* <Main /> */}
          {/* <Login /> */}
          <Footer />
        </div>
      </AppContextProvider>
    
  );
}

export default App;
