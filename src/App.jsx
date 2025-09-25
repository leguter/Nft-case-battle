
import './App.css'
// import CaseList from './components/CaseList/CaseList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import HomePage from './pages/HomePage/HomePage';
import CasePage from './pages/CasePage/CasePage';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {

  return (
    <>
    {/* <Header /> */}
       <Router>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            {/* Маршрут для головної сторінки */}
            <Route path="/" element={<HomePage />} />
            {/* Маршрут для сторінки кейса. :caseId - це динамічний параметр */}
             <Route path="/login" element={<LoginPage />} />
            <Route path="/case/:caseId" element={<CasePage />} />
          </Routes>
        </main>
      </div>
    </Router>
    </>
  )
}

export default App
