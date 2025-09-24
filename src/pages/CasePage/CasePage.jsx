// src/pages/CasePage.js
import { useParams, Link } from 'react-router-dom';
import caseData from '../../data/cases'; // Масив з даними про кейси
import CaseContent from '../../components/CaseContent/CaseContent'; // Компонент, що ви створили раніше
import styles from './CasePage.module.css'; // Імпорт CSS-модуля
function CasePage() {
  // Використовуємо useParams для отримання id з URL
  const { caseId } = useParams();

  // Знаходимо відповідний кейс у масиві даних
  const caseItem = caseData.find(item => item.id === caseId);

  // Якщо кейс не знайдено, показуємо повідомлення про помилку
  if (!caseItem) {
    return <div>Кейс не знайдено.</div>;
  }

  return (
    <div className={styles.container}>
      <Link to="/"  className={styles.btnBack}>← НАЗАД</Link>
      <CaseContent caseItem={caseItem} /> {/* Передаємо дані про кейс у компонент вмісту */}
    </div>
  );
}

export default CasePage;