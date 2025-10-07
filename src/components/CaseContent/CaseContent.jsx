import styles from './CaseContent.module.css'; // Імпорт CSS-модуля

// const items = [
//  { 
//     name: 'ION GEM', 
//     src: '../../../public/images-drop/ion-gem.png', 
//     tonPrice: '82', 
//     dropChance: '0.5', 
//     stars: '16958',
//     type: 'Mythic' 
//   },
//   { 
//     name: 'SWISS WATCH', 
//     src: '../../../public/images-drop/swiss-watch.png', 
//     tonPrice: '37', 
//     dropChance: '1.4', 
//     stars: '8300',
//     type: 'Legendary' 
//   },
//   { 
//     name: 'TOY BEAR', 
//     src: '../../../public/images-drop/bear.png', 
//     tonPrice: '25', 
//     dropChance: '2.6', 
//     stars: '5720',
//     type: 'Epic' 
//   },
//   { 
//     name: 'CUPID CHARM', 
//     src: '../../../public/images-drop/cupid-charm.png', 
//     tonPrice: '10.50', 
//     dropChance: '3.1', 
//     stars: '2400',
//     type: 'Rare' 
//   },
//   { 
//     name: 'SAKURA FLOWER', 
//     src: '../../../public/images-drop/flower.png', 
//     tonPrice: '5.04', 
//     dropChance: '19', 
//     stars: '1040',
//     type: 'Common' 
//   },
//   { 
//     name: 'DESK CALENDAR', 
//     src: '../../../public/images-drop/calendar.png', 
//     tonPrice: '1.36', 
//     dropChance: '37', 
//     stars: '272',
//     type: 'Common' 
//   },
// ];
// // import photo from "../../../public/images-cases/case1.png"
// // async function openCase() {
// //     const caseIdToOpen = 'case_common'; // ID кейсу, який ми хочемо відкрити
// //     const BACKEND_URL = 'https://back-for-project.onrender.com';

// //     try {
// //         const response = await fetch(`${BACKEND_URL}/api/case/open`, {
// //             method: 'POST',
// //             headers: {
// //                 'Content-Type': 'application/json',
// //             },
// //             // ВАЖЛИВО: відправляємо cookie для аутентифікації
// //             credentials: 'include',
// //             // Вказуємо, який кейс відкриваємо
// //             body: JSON.stringify({ caseId: caseIdToOpen }),
// //         });

// //         const result = await response.json();

// //         if (response.ok) {
// //             // УСПІХ! Бекенд повернув виграний предмет
// //             console.log('Ви виграли:', result.wonItem.name);
// //             console.log('Ваш новий баланс:', result.newBalance);

// //             // Тут ви можете запустити анімацію "прокрутки" кейсу
// //             // і в кінці показати модальне вікно з result.wonItem
// //             alert(`Вітаємо! Ви виграли ${result.wonItem.name}!`);
            
// //             // Оновіть баланс на сторінці
// //             // document.getElementById('balance-display').innerText = result.newBalance;
// //         } else {
// //             // Якщо сталася помилка (немає грошей, не залогінений і т.д.)
// //             alert(`Помилка: ${result.message}`);
// //         }
// //     } catch (error) {
// //         console.error('Не вдалося відкрити кейс:', error);
// //         alert('Сталася мережева помилка. Спробуйте пізніше.');
// //     }
// // }

// // Прив'яжіть цю функцію до вашої кнопки
// // document.getElementById('open-case-button').addEventListener('click', openCase);
// const CaseContent = (caseItem) => {
//   return (
    // <div className={styles.caseContentContainer}>
    //   <div className={styles.caseHeader}>
    //     {/* <button className={styles.backButton}>← НАЗАД</button> */}
    //     <h1 className={styles.caseTitle}>{caseItem.caseItem.name}</h1>
    //     <div className={styles.caseImageWrapper}>
    //       <img src={caseItem.caseItem.image} alt={caseItem.caseItem.name} className={styles.caseMainImage} />
    //     </div>
    //   </div>

      // <div className={styles.authAlert}>
      //   <p>Ви не авторизовані!</p>
      //   <p>Для відкриття кейса необхідно пройти авторизацію</p>
      // </div>

    //   <h2 className={styles.sectionTitle}>СОДЕРЖИМОЕ КЕЙСА</h2>
    //   <div className={styles.itemsGrid}>
    //     {items.map((item, index) => (
    //       <div key={index} className={styles.itemCard}>
    //         <span className={styles.itemInfo}>i</span>
    //         <img src={item.src} alt="nft" width="48px" height="48px" />
    //         {/* <span className={styles.itemIcon}>{item.icon}</span> */}
    //         <div className={styles.itemDetails}>
    //           <p className={styles.itemName}>{item.name}</p>
    //           <div className={styles.itemPrice}>
    //               <div className="itemPrice">
    //   {/* Застосовуємо клас rotating-star до span із символом зірки */}
    //   <span className="stars">
    //     {item.stars}{' '}
    //     <span className="rotatingStar">⭐️</span>
    //   </span>
    // </div>
    //             {/* <span className={styles.stars}>{item.stars} ⭐</span> */}
    //             <span className={styles.usd}>{item.tonPrice}<img className={styles.ton} src="../../../public/ton-symbol.svg" width="16px" height="16px"></img></span>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
//     </div>
//   );
// };

const items = [
    { name: 'ION GEM', src: '/images-drop/ion-gem.png', tonPrice: '82', stars: '16958', type: 'Mythic' },
    { name: 'SWISS WATCH', src: '/images-drop/swiss-watch.png', tonPrice: '37', stars: '8300', type: 'Legendary' },
    { name: 'TOY BEAR', src: '/images-drop/bear.png', tonPrice: '25', stars: '5720', type: 'Epic' },
    { name: 'CUPID CHARM', src: '/images-drop/cupid-charm.png', tonPrice: '10.50', stars: '2400', type: 'Rare' },
    { name: 'SAKURA FLOWER', src: '/images-drop/flower.png', tonPrice: '5.04', stars: '1040', type: 'Common' },
    { name: 'DESK CALENDAR', src: '/images-drop/calendar.png', tonPrice: '1.36', stars: '272', type: 'Common' },
];
const BACKEND_URL = 'https://back-for-project-1.onrender.com';
// Замініть на ім'я вашого бота
const TELEGRAM_BOT_USERNAME = '@Sanyajjj_bot'; 
const CaseContent = ({ caseItem,user, setUser }) => {

  const handleOpenCase = async () => {
    const caseId = 'gift_case_1'; // ID кейсу, який відкриваємо
    
    try {
      const response = await fetch(`${BACKEND_URL}/api/case/open`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // Дуже важливо для відправки cookie сесії!
        body: JSON.stringify({ caseId }),
      });

      const result = await response.json();

      if (response.ok) {
        alert(`Вітаємо! Ви виграли ${result.wonItem.name}! Ваш новий баланс: ${result.newBalance} 💎`);
        // Оновлюємо стан користувача, щоб баланс змінився миттєво без перезавантаження
        setUser(prevUser => ({ ...prevUser, balance: result.newBalance }));
      } else {
        alert(`Помилка: ${result.message}`);
      }
    } catch (error) {
      console.error('Не вдалося відкрити кейс:', error);
      alert('Сталася мережева помилка. Спробуйте пізніше.');
    }
  };

  return (
            <div className={styles.caseContentContainer}>
      <div className={styles.caseHeader}>
        {/* <button className={styles.backButton}>← НАЗАД</button> */}
        <h1 className={styles.caseTitle}>{caseItem.name}</h1>
        <div className={styles.caseImageWrapper}>
          <img src={caseItem.image} alt={caseItem.name} className={styles.caseMainImage} />
        </div>
      </div>
        {/* Умовний рендеринг кнопки або повідомлення про авторизацію */}
        <div className="my-8 text-center">
            {user ? (
                <button 
                    onClick={handleOpenCase}
                    className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-full text-2xl transition transform hover:scale-105 shadow-lg"
                >
                    Відкрити Кейс (150 ⭐️)
                </button>
            ) : (
                      <div className={styles.authAlert}>
        <p>Ви не авторизовані!</p>
        <p>Для відкриття кейса необхідно пройти авторизацію</p>
      </div>
            )}
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
                <span className={styles.usd}>{item.tonPrice}<img className={styles.ton} src="./../../public/ton-symbol.svg" width="16px" height="16px"></img></span>
              </div>
            </div>
          </div>
        ))}
      </div>
 </div>
  );
};
 export default CaseContent;

