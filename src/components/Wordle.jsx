import React, { useEffect, useState } from "react";
import Board from "./Board";
import Keyboard from "./Keyboard";
import Modal from "./Modal";
import { useContext } from "react";
import { WordContext } from "../providers/WordProvider";

const Wordle = () => {
  const { currentWord, restart, setRestart } = useContext(WordContext);
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [keyStatus, setKeyStatus] = useState({});
  const [gameOver, setGameOver] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (restart) {
      resetGame();
      setRestart(false);
    }
    // Kalan süreyi hesapla
    const calculateTimeLeft = () => {
      const now = new Date();
      const resetTime = new Date();
      resetTime.setHours(24, 0, 0, 0);
      const difference = resetTime - now;

      // Saat, dakika ve saniye cinsinden kalan süreyi hesapla
      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      return { hours, minutes, seconds };
    };

    const timeLeft = calculateTimeLeft();
    setTimeLeft(timeLeft);

    // Zamanlayıcıyı her 1 saniyede bir güncelle
    const timer = setInterval(() => {
      const timeLeft = calculateTimeLeft();
      setTimeLeft(timeLeft);

      // Saat 00:00 olduğunda oyunu sıfırla
      if (
        timeLeft.hours === 0 &&
        timeLeft.minutes === 0 &&
        timeLeft.seconds === 0
      ) {
        resetGame();
      }
    }, 1000);

    // localStorage'dan tahminleri ve oyun durumunu yükle
    const savedGuesses =
      JSON.parse(localStorage.getItem("wordleGuesses")) || [];
    const savedGameOver =
      JSON.parse(localStorage.getItem("wordleGameOver")) || false;

    if (savedGuesses.length > 0) {
      setGuesses(savedGuesses);

      // Oyun bitmişse ve tahminler tamamlanmışsa modal'ı aç
      if (savedGameOver) {
        setGameOver(true);
        setModalOpen(true);
      }
    }

    return () => clearInterval(timer);
  }, [restart]);

  useEffect(() => {
    // Klavye olaylarını dinle
    const handleKeydown = (event) => {
      const key = event.key.toUpperCase();
      if (gameOver) return; // Oyun bittiyse işlem yapma

      if (key === "ENTER") {
        handleKeyPress("ENTER");
      } else if (key === "BACKSPACE" || key === "DELETE") {
        handleKeyPress("BACKSPACE");
      } else if (/^[A-ZÇĞİÖŞÜ]$/.test(key)) {
        handleKeyPress(key);
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [currentGuess, guesses, gameOver]);

  const handleKeyPress = (key) => {
    if (gameOver) return; // Oyun bittiyse işlem yapma

    if (key === "ENTER") {
      if (currentGuess.length === 5) {
        const newStatus = getKeyStatus(currentGuess);
        setKeyStatus({ ...keyStatus, ...newStatus });
        setGuesses([...guesses, currentGuess]);
        setCurrentGuess("");

        // Doğru kelimeyi bulduysa oyunu bitir
        if (currentGuess === currentWord) {
          setGameOver(true);
          setModalOpen(true);

          // localStorage'e tahminleri ve oyun durumunu kaydet
          localStorage.setItem(
            "wordleGuesses",
            JSON.stringify([...guesses, currentGuess])
          );
          localStorage.setItem("wordleGameOver", JSON.stringify(true));
          localStorage.setItem("wordleGameResult", "WIN");
          return;
        }

        // localStorage'e tahminleri kaydet
        localStorage.setItem(
          "wordleGuesses",
          JSON.stringify([...guesses, currentGuess])
        );

        // 6 tahmin yapıldığında oyunu bitir ve modalı aç
        if (guesses.length === 5) {
          setGameOver(true);
          setModalOpen(true);
          localStorage.setItem("wordleGameOver", JSON.stringify(true));
          localStorage.setItem("wordleGameResult", JSON.stringify("LOSE"));
        }
      }
    } else if (key === "BACKSPACE") {
      setCurrentGuess(currentGuess.slice(0, -1));
    } else if (currentGuess.length < 5 && /^[A-ZÇĞİÖŞÜ]$/.test(key)) {
      setCurrentGuess(currentGuess + key);
    }
  };

  const getGuessStatus = (guess) => {
    const result = Array(5).fill("absent");
    const currentWordArray = currentWord.split("");
    const guessArray = guess.split("");

    guessArray.forEach((letter, index) => {
      if (letter === currentWordArray[index]) {
        result[index] = "correct";
        currentWordArray[index] = null;
      }
    });

    guessArray.forEach((letter, index) => {
      if (result[index] !== "correct" && currentWordArray.includes(letter)) {
        result[index] = "present";
        currentWordArray[currentWordArray.indexOf(letter)] = null;
      }
    });

    return result;
  };

  const getKeyStatus = (guess) => {
    const status = getGuessStatus(guess);
    const newStatus = { ...keyStatus };

    guess.split("").forEach((letter, index) => {
      if (status[index] === "correct") {
        newStatus[letter] = "correct";
      } else if (
        status[index] === "present" &&
        newStatus[letter] !== "correct"
      ) {
        newStatus[letter] = "present";
      } else if (status[index] === "absent" && !newStatus[letter]) {
        newStatus[letter] = "absent";
      }
    });

    return newStatus;
  };

  const resetGame = () => {
    setGuesses([]);
    setCurrentGuess("");
    setKeyStatus({});
    setGameOver(false);
    setModalOpen(false);
    localStorage.removeItem("wordleGuesses");
    localStorage.removeItem("wordleGameOver");
    localStorage.removeItem("wordleGameResult");
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div className="wordle">
      <Board
        guesses={guesses}
        currentGuess={currentGuess}
        getGuessStatus={getGuessStatus}
      />
      <Keyboard
        onKeyPress={handleKeyPress}
        keyStatus={keyStatus}
        disabled={gameOver}
      />
      {modalOpen && <Modal onClose={handleModalClose} timeLeft={timeLeft} />}
    </div>
  );
};

export default Wordle;
