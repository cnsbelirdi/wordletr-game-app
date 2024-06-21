import React, { createContext, useState, useEffect } from "react";
import words from "../../words.json"; // Kelime listesinin yolu

export const WordContext = createContext(); // Bağlam oluştur

const WordProvider = ({ children }) => {
  const [currentWord, setCurrentWord] = useState("");
  const [restart, setRestart] = useState(false);

  // Kelime listesinden rastgele kelime seçen fonksiyon
  const selectRandomWord = () => {
    const { words: wordList } = words;
    const randomIndex = Math.floor(Math.random() * wordList.length);
    return wordList[randomIndex];
  };

  // Günlük olarak kelimeyi güncelleyen fonksiyon
  const updateWordDaily = () => {
    const currentDate = new Date();
    const lastUpdateDate = new Date(localStorage.getItem("wordleLastUpdate"));
    if (
      !lastUpdateDate ||
      currentDate.getDate() !== lastUpdateDate.getDate() ||
      currentDate.getMonth() !== lastUpdateDate.getMonth() ||
      currentDate.getFullYear() !== lastUpdateDate.getFullYear()
    ) {
      const newWord = selectRandomWord();
      localStorage.setItem("wordleCurrentWord", newWord);
      localStorage.setItem("wordleLastUpdate", currentDate.toISOString());
      setCurrentWord(newWord);
      setRestart(true);
    } else {
      const savedWord = localStorage.getItem("wordleCurrentWord");
      setCurrentWord(savedWord);
    }
  };

  useEffect(() => {
    updateWordDaily();
  }, []);

  return (
    <WordContext.Provider value={{ currentWord, restart, setRestart }}>
      {children}
    </WordContext.Provider>
  );
};

export default WordProvider;
