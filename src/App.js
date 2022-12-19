import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import NavBar from './components/screens/includes/NavBar';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Summary/>}/>
        <Route path='products' element={<Products/>}/>
        <Route  path='hotselling' element={<HotSelling/>}/>
        <Route  path='Manageorder' element={<ManageOrder/>}/>
        <Route  path='payments' element={<Payments/>}/>
        <Route  path='settings' element={<Settings/>}/>
      </Routes>
    </Router>

  );
}

export default App;
