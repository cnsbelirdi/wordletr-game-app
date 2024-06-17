import React, { createContext, useState, useEffect } from "react";
import words from "../../words.json"; // Kelime listesinin yolu

export const WordContext = createContext(); // Bağlam oluştur

const WordProvider = ({ children }) => {
  const [currentWord, setCurrentWord] = useState("");

  // Kelime listesinden rastgele kelime seçen fonksiyon
  const selectRandomWord = () => {
    const { words: wordList } = words;
    const randomIndex = Math.floor(Math.random() * wordList.length);
    return wordList[randomIndex];
  };

  // Günlük olarak kelimeyi güncelleyen fonksiyon
  const updateWordDaily = () => {
    const currentDate = new Date();
    const resetTime = new Date();
    resetTime.setHours(0);
    resetTime.setMinutes(0);
    resetTime.setSeconds(0);

    // Eğer şu anki saat gece yarısından sonra ise kelimeyi güncelle
    if (currentDate > resetTime) {
      const newWord = selectRandomWord();
      localStorage.setItem("wordleCurrentWord", newWord);
      setCurrentWord(newWord);
    }
  };

  useEffect(() => {
    // localStorage'dan kaydedilmiş kelimeyi kontrol et
    const savedWord = localStorage.getItem("wordleCurrentWord");

    if (savedWord) {
      setCurrentWord(savedWord);
    } else {
      // Eğer localStorage'da kayıtlı kelime yoksa veya ilk kez yükleniyorsa yeni bir kelime seç
      const initialWord = selectRandomWord();
      localStorage.setItem("wordleCurrentWord", initialWord);
      setCurrentWord(initialWord);
    }

    // Gece yarısından sonra kelimeyi güncellemek için bir timeout ayarla
    const currentDate = new Date();
    const resetTime = new Date();
    resetTime.setHours(0);
    resetTime.setMinutes(0);
    resetTime.setSeconds(0);

    // 00:00'a kalan süreyi hesapla
    const timeUntilMidnight = resetTime.getTime() - currentDate.getTime();

    // Eğer gece yarısına daha az süre varsa, güncellemeyi zamanla eşle
    if (timeUntilMidnight > 0) {
      setTimeout(() => {
        updateWordDaily();
        const timer = setInterval(updateWordDaily, 1000 * 60 * 60 * 24); // 24 saatte bir güncelle
        return () => clearInterval(timer);
      }, timeUntilMidnight);
    }
  }, []); // Bu boş bağımlılık dizisi, yalnızca bileşen ilk kez yüklendiğinde useEffect'in çalışmasını sağlar

  return (
    <WordContext.Provider value={{ currentWord }}>
      {children}
    </WordContext.Provider>
  );
};

export default WordProvider;
