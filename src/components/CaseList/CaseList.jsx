// components/CasesGrid.js
import CaseCard from '../CaseCard/CaseCard';
import caseData from '../../data/cases'; // Імпортуємо дані
import css from "./CaseList.module.css"
import { Link } from 'react-router';
function CaseList() {
  return (
    <div className={css.casesGridContainer}>
      <h2 className={css.casesGridContainerH2}>Наші NFT-Кейси</h2>
      <div className={css.casesGrid}>
        {caseData.map(caseItem => (
            <div key={caseItem.id} className={css.caseCard}>
             <Link to={`/case/${caseItem.id}`} className="case-link">
          <CaseCard key={caseItem.id} caseItem={caseItem} />
          </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CaseList;