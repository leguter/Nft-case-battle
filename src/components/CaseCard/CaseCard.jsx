// components/CaseCard.js
import css from "./CaseCard.module.css"
// Імпортуємо всі зображення, які можуть бути використані
// Це найкраще робити, якщо у вас обмежена кількість зображень
import knifeFadeImg from '../../../public/images-cases/1.jpg';
import giftBoxImg from '../../../public/images-cases/1.jpg';
import telegramPackImg from '../../../public/images-cases/1.jpg';
import cryptoImg from '../../../public/images-cases/1.jpg';
import pixelImg from '../../../public/images-cases/1.jpg';
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
      <p className={css.caseCardPrice}>{caseItem.price}</p>
      <button className={css.caseCardButton}>Відкрити</button>
    </div>
  );
}

export default CaseCard;
