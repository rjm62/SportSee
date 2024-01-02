import {BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import {DataContextProvider} from './utils/Context/DataContext'
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Header from './components/Header/Header';
import UserSwitch from './components/UserSwitch/UserSwitch'

function App() {
  return (
    <Router>
     <DataContextProvider>
      <Header />
      <Routes>
        <Route path="/Sportsee" element={<Navigate replace to="/" />} />
        <Route path="/" element={<Dashboard />} />   
      </Routes>
      </DataContextProvider>
    </Router>
  )
}

export default App;
