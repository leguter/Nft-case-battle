import React from 'react';
import styles from './CaseContent.module.css'; // Імпорт CSS-модуля

const items = [
 { 
    name: 'ION GEM', 
    src: '../../../public/images-drop/ion-gem.png', 
    tonPrice: '82', 
    dropChance: '0.5', 
    stars: '16958',
    type: 'Mythic' 
  },
  { 
    name: 'SWISS WATCH', 
    src: '../../../public/images-drop/swiss-watch.png', 
    tonPrice: '37', 
    dropChance: '1.4', 
    stars: '8300',
    type: 'Legendary' 
  },
  { 
    name: 'TOY BEAR', 
    src: '../../../public/images-drop/bear.png', 
    tonPrice: '25', 
    dropChance: '2.6', 
    stars: '5720',
    type: 'Epic' 
  },
  { 
    name: 'CUPID CHARM', 
    src: '../../../public/images-drop/cupid-charm.png', 
    tonPrice: '10.50', 
    dropChance: '3.1', 
    stars: '2400',
    type: 'Rare' 
  },
  { 
    name: 'SAKURA FLOWER', 
    src: '../../../public/images-drop/flower.png', 
    tonPrice: '5.04', 
    dropChance: '19', 
    stars: '1040',
    type: 'Common' 
  },
  { 
    name: 'DESK CALENDAR', 
    src: '../../../public/images-drop/calendar.png', 
    tonPrice: '1.36', 
    dropChance: '37', 
    stars: '272',
    type: 'Common' 
  },
];
import photo from "../../../public/images-cases/case1.png"

const CaseContent = () => {
  return (
    <div className={styles.caseContentContainer}>
      <div className={styles.caseHeader}>
        {/* <button className={styles.backButton}>← НАЗАД</button> */}
        <h1 className={styles.caseTitle}>VINTAGE CIGAR ALL IN</h1>
        <div className={styles.caseImageWrapper}>
          <img src={photo} alt="Vintage Cigar All In Case" className={styles.caseMainImage} />
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
            <img src={item.src} alt="nft" width="48px" height="48px" />
            {/* <span className={styles.itemIcon}>{item.icon}</span> */}
            <div className={styles.itemDetails}>
              <p className={styles.itemName}>{item.name}</p>
              <div className={styles.itemPrice}>
                  <div className="itemPrice">
      {/* Застосовуємо клас rotating-star до span із символом зірки */}
      <span className="stars">
        {item.stars}{' '}
        <span className="rotatingStar">⭐️</span>
      </span>
    </div>
                {/* <span className={styles.stars}>{item.stars} ⭐</span> */}
                <span className={styles.usd}>{item.tonPrice} $</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseContent;