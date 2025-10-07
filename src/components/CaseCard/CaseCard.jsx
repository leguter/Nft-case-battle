// components/CaseCard.js
import css from "./CaseCard.module.css"
// Імпортуємо всі зображення, які можуть бути використані
// Це найкраще робити, якщо у вас обмежена кількість зображень
import knifeFadeImg from '../../../public/images-cases/g1.png';
import giftBoxImg from '../../../public/images-cases/g2.png';
import telegramPackImg from '../../../public/images-cases/g3.png';
import cryptoImg from '../../../public/images-cases/g4.png';
import pixelImg from '../../../public/images-cases/g5.png';
// ... імпортуйте інші зображення

// Мапуємо назви файлів на імпортовані модулі
const images = {
  'case-1': knifeFadeImg,
  'case-2': giftBoxImg,
  'case-3': telegramPackImg,
  'case-4': cryptoImg,
  'case-5': pixelImg,
  // ... додайте інші зображення
};


function CaseCard({ caseItem }) {
  // Отримуємо імпортований URL зображення за id кейса
  const imageUrl = images[caseItem.id];
  // Або, якщо caseItem.image - це повний шлях, можна використовувати Map як в попередньому прикладі:
  // const imageUrl = imageMap[caseItem.image];


  if (!imageUrl) {
    console.warn(`Зображення для кейса "${caseItem.name}" не знайдено.`);
    return null; // Або поверніть заглушку
  }

  return (
    <div className={css.caseCard}>
      <div className={css.caseImageWrapper}>
        <img src={imageUrl} alt={caseItem.name} className={css.caseCardImage} />
      </div>
      <h3 className={css.caseCardName}>{caseItem.name}</h3>
      <div className={css.wrapperPrice}>
      <p className={css.caseCardPrice}>{caseItem.price}<span className={css.usd}><img className={css.ton} src="../../../public/ton-symbol.svg" width="16px" height="16px"></img></span></p>
      <p className={css.caseCardPrice}>{caseItem.stars}⭐</p>
      </div>
      <button className={css.caseCardButton}>Відкрити</button>
    </div>
  );
}

export default CaseCard;
