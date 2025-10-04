import { useEffect } from "react";

const TelegramLoginButton = () => {
  useEffect(() => {
    const container = document.getElementById("telegram-button-container");
    if (!container) return;

    // очищення контейнера — на випадок повторного монтування
    container.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?22";
    script.async = true;
    script.setAttribute("data-telegram-login", "Sanyajjj_bot");
    script.setAttribute(
      "data-auth-url",
      "https://nft-case-battle.vercel.app/auth/telegram/callback"
    );
    script.setAttribute("data-size", "large");
    script.setAttribute("data-radius", "8");
    script.setAttribute("data-request-access", "write");

    // невелика затримка, щоб React встиг змонтувати DOM
    setTimeout(() => {
      container.appendChild(script);
    }, 100);
  }, []);

  return (
    <div
      id="telegram-button-container"
      style={{ display: "flex", justifyContent: "center" }}
    />
  );
};

export default TelegramLoginButton;

