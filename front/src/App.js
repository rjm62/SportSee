import {BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/Sportsee" element={<Navigate replace to="/" />} />
        <Route path="/" element={<Dashboard />} />   
      </Routes>
      <SideBar />
    </Router>
  )
}

export default App;
