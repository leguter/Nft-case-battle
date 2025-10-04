import { useEffect, useRef } from "react";

const TelegramLoginButton = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // очищуємо контейнер (на випадок повторного монтування)
    container.innerHTML = "";

    // створюємо віджет Telegram
    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?22";
    script.async = true;
    script.setAttribute("data-telegram-login", "Sanyajjj_bot"); // 👈 заміни на свого бота
    script.setAttribute(
      "data-auth-url",
      "https://nft-case-battle.vercel.app/auth/telegram/callback"
    );
    script.setAttribute("data-size", "large");
    script.setAttribute("data-radius", "8");
    script.setAttribute("data-request-access", "write");

    // додаємо скрипт лише після того, як DOM точно змонтувався
    setTimeout(() => {
      container.appendChild(script);
    }, 50);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "50px",
      }}
    />
  );
};

export default TelegramLoginButton;
