import React, { useState, useRef, useEffect } from 'react';
import css from './CaseOpener.module.css'; // Імпорт стилів як об'єкта 'css'

// Пул предметів, які можуть випасти з кейса.
// Вищі значення 'weight' означають вищу ймовірність.
const itemPool =;

// --- Утилітарна функція для вибору предмета за вагою ---
const getWeightedRandomItem = (items) => {
  const totalWeight = items.reduce((sum, item) => sum + item.weight, 0);
  let random = Math.random() * totalWeight;

  for (const item of items) {
    if (random < item.weight) {
      return item;
    }
    random -= item.weight;
  }
  // Резервний варіант, якщо щось піде не так
  return items[items.length - 1];
};

const CaseOpener = () => {
  const = useState(false);
  const = useState();
  const = useState({});
  
  const reelRef = useRef(null);
  const reelContainerRef = useRef(null);

  // --- Обробник завершення анімації ---
  useEffect(() => {
    const reelElement = reelRef.current;
    if (!reelElement) return;

    const handleTransitionEnd = () => {
      console.log("Анімація завершена!");
      setIsSpinning(false);
    };

    reelElement.addEventListener('transitionend', handleTransitionEnd);

    // Прибирання слухача подій при розмонтуванні компонента
    return () => {
      reelElement.removeEventListener('transitionend', handleTransitionEnd);
    };
  },);


  const handleOpenCase = () => {
    if (isSpinning) return;
    setIsSpinning(true);

    // --- 1. Генерація довгої стрічки предметів для рулетки ---
    const REEL_LENGTH = 150;
    const newRouletteItems =;
    for (let i = 0; i < REEL_LENGTH; i++) {
      newRouletteItems.push(itemPool[Math.floor(Math.random() * itemPool.length)]);
    }

    // --- 2. Визначення переможця (до початку анімації) ---
    const winner = getWeightedRandomItem(itemPool);
    
    // Встановлюємо переможця на одну з останніх позицій для кращого візуального ефекту
    const winnerIndex = REEL_LENGTH - 20 + Math.floor(Math.random() * 10);
    newRouletteItems[winnerIndex] = winner;
    
    setRouletteItems(newRouletteItems);

    // --- 3. Скидання позиції та анімації ---
    // Використовуємо setTimeout, щоб React встиг оновити DOM перед розрахунком
    setTimeout(() => {
      if (!reelContainerRef.current) return;

      // Скидаємо анімацію та позицію
      setTransformStyle({
        transition: 'none',
        transform: 'translateX(0px)',
      });

      // --- 4. Розрахунок фінальної позиції для зупинки ---
      // Використовуємо ще один setTimeout, щоб браузер застосував скидання стилів
      setTimeout(() => {
        const ITEM_WIDTH = 150; // Має відповідати ширині в CSS
        const containerWidth = reelContainerRef.current.clientWidth;

        // Позиція переможця від початку стрічки
        const targetPosition = winnerIndex * ITEM_WIDTH;
        
        // Коригування для центрування предмета під індикатором
        const centeringAdjustment = (containerWidth / 2) - (ITEM_WIDTH / 2);
        
        // Додаємо невелику випадковість, щоб зупинка не була завжди в одному пікселі
        const randomJitter = (Math.random() - 0.5) * (ITEM_WIDTH * 0.8);

        const finalTranslateX = targetPosition - centeringAdjustment + randomJitter;

        // --- 5. Запуск анімації ---
        setTransformStyle({
          transition: 'transform 7s cubic-bezier(0.15, 0.5, 0.25, 1)',
          transform: `translateX(-${finalTranslateX}px)`,
        });
      }, 50);
    }, 50);
  };

  return (
    <div className={css.caseOpenerContainer}>
      <div className={css.rouletteWrapper} ref={reelContainerRef}>
        <div className={css.pointer}></div>
        <div className={css.reel} ref={reelRef} style={transformStyle}>
          {rouletteItems.map((item, index) => (
            <div key={index} className={css.item} data-rarity={item.rarity.toLowerCase()}>
              <img src={item.image} alt={item.name} className={css.itemImage} />
              <div className={css.itemName}>{item.name}</div>
            </div>
          ))}
        </div>
      </div>
      <button 
        className={css.openButton} 
        onClick={handleOpenCase} 
        disabled={isSpinning}
      >
        {isSpinning? 'Відкриття...' : 'Відкрити кейс'}
      </button>
    </div>
  );
};

export default CaseOpener;