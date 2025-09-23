import React from 'react';
import styles from './CaseContent.module.css'; // Імпорт CSS-модуля

const items = [
  { name: 'Vintage Cigar El Classico', icon: '🚬', stars: '39996', price: '199.98', type: 'rare' },
  { name: 'Lol Pop (Random)', icon: '🍭', stars: '290', price: '1.45', type: 'common' },
  { name: 'Desk Calendar (Random)', icon: '📅', stars: '282', price: '1.41', type: 'common' },
  { name: 'Diamond', icon: '💎', stars: '100', price: '0.5', type: 'epic' },
  { name: 'Cup', icon: '🏆', stars: '100', price: '0.5', type: 'epic' },
  { name: 'Ring', icon: '💍', stars: '100', price: '0.5', type: 'epic' },
  { name: 'Cake', icon: '🎂', stars: '50', price: '0.25', type: 'common' },
  { name: 'Rocket', icon: '🚀', stars: '50', price: '0.25', type: 'common' },
  { name: 'Champagne', icon: '🍾', stars: '50', price: '0.25', type: 'common' },
  { name: 'Flowers', icon: '💐', stars: '50', price: '0.25', type: 'common' },
  { name: 'Gift', icon: '🎁', stars: '25', price: '0.125', type: 'common' },
  { name: 'Rose', icon: '🌹', stars: '25', price: '0.125', type: 'common' },
  { name: 'Heart', icon: '💖', stars: '15', price: '0.075', type: 'common' },
  { name: 'Bear', icon: '🐻', stars: '15', price: '0.075', type: 'common' },
];

const caseImage = 'https://i.imgur.com/K0rWq7R.png';

const CaseContent = () => {
  return (
    <div className={styles.caseContentContainer}>
      <div className={styles.caseHeader}>
        <button className={styles.backButton}>← НАЗАД</button>
        <h1 className={styles.caseTitle}>VINTAGE CIGAR ALL IN</h1>
        <div className={styles.caseImageWrapper}>
          <img src={caseImage} alt="Vintage Cigar All In Case" className={styles.caseMainImage} />
        </div>
      </div>

      <div className={styles.authAlert}>
        <p>Ви не авторизовані!</p>
        <p>Для відкриття кейса необхідно пройти авторизацію</p>
      </div>

      <h2 className={styles.sectionTitle}>СОДЕРЖИМОЕ КЕЙСА</h2>
      <div className={styles.itemsGrid}>
        {items.map((item, index) => (
          <div key={index} className={styles.itemCard}>
            <span className={styles.itemInfo}>i</span>
            <span className={styles.itemIcon}>{item.icon}</span>
            <div className={styles.itemDetails}>
              <p className={styles.itemName}>{item.name}</p>
              <div className={styles.itemPrice}>
                <span className={styles.stars}>{item.stars} ⭐</span>
                <span className={styles.usd}>{item.price} $</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseContent;