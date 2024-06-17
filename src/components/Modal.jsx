const Modal = ({ onClose, timeLeft }) => {
  // Zamanı HH:MM:SS formatında gösterme fonksiyonu
  const formatTime = (time) => {
    const hours = String(time.hours).padStart(2, "0");
    const minutes = String(time.minutes).padStart(2, "0");
    const seconds = String(time.seconds).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Oyun Bitti!</h2>
        <p>Doğru kelimeyi buldunuz.</p>
        <p>Kalan süre: {formatTime(timeLeft)}</p>
        <button onClick={onClose}>Kapat</button>
      </div>
    </div>
  );
};

export default Modal;
