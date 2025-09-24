// src/pages/HomePage.js
// import { Link } from 'react-router-dom';
// import './HomePage.css'; // Стилі для сторінки
import CaseList from '../../components/CaseList/CaseList';

function HomePage() {
  return (
    
      <div className="cases-grid">
        <CaseList />
      </div>
  );
}

export default HomePage;