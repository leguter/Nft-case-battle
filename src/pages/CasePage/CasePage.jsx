// src/pages/CasePage.js
import { useParams, Link } from 'react-router-dom';
import caseData from '../../data/cases'; // Масив з даними про кейси
import CaseContent from '../../components/CaseContent/CaseContent'; // Компонент, що ви створили раніше
import caseContents from '../../data/caseContents';
import styles from './CasePage.module.css'; // Імпорт CSS-модуля
function CasePage({user}) {
  // Використовуємо useParams для отримання id з URL
  const { caseId } = useParams();

  // 2. Знаходимо відповідний пул предметів за caseId
  const caseItem = caseData.find(item => item.id === caseId);

  // 2. Знаходимо відповідний пул предметів за caseId
  const itemPool = caseContents[caseId];

  if (!caseItem) {
    return <div>Кейс не знайдено.</div>;
  }

  // 3. Перевіряємо, чи є вміст для цього кейса
  if (!itemPool) {
    return <div>Вміст для цього кейса ще не додано.</div>;
  }

  return (
    <div className={styles.container}>
      <Link to="/"  className={styles.btnBack}>← НАЗАД</Link>
      <CaseContent caseItem={caseItem} user={user} /> {/* Передаємо дані про кейс у компонент вмісту */}
    </div>
  );
}

export default CasePage;