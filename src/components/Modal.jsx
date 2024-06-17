import { useContext } from "react";
import { WordContext } from "../providers/WordProvider";

const Modal = ({ onClose, timeLeft }) => {
  const { currentWord } = useContext(WordContext);
  // Zamanı HH:MM:SS formatında gösterme fonksiyonu
  const formatTime = (time) => {
    const hours = String(time.hours).padStart(2, "0");
    const minutes = String(time.minutes).padStart(2, "0");
    const seconds = String(time.seconds).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  const result = localStorage.getItem("wordleGameResult");

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Oyun Bitti!</h2>
        <p>
          {result === "WIN"
            ? "Doğru kelimeyi tahmin ettiniz."
            : "Kelimeyi tahmin edemediniz."}
          <br />
          <br /> Kelime: <b>{currentWord}</b>
        </p>
        <p>Kalan süre: {formatTime(timeLeft)}</p>
        <button onClick={onClose}>Kapat</button>
      </div>
    </div>
  );
};

export default Modal;
