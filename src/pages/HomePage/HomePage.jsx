// src/pages/HomePage.js
// import { Link } from 'react-router-dom';
import caseData from '../../data/cases'; // Масив з даними про кейси
// import './HomePage.css'; // Стилі для сторінки
import CaseList from '../../components/CaseList/CaseList';

function HomePage() {
  return (
    
      <div className="cases-grid">
        {caseData.map(caseItem => (
          <div key={caseItem.id} className="case-card">
            {/* Використовуємо компонент Link для навігації */}
          <CaseList />
          </div>
        ))}
      </div>
  );
}

export default HomePage;