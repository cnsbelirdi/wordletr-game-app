import "./App.css";
import Wordle from "./components/Wordle";
import WordProvider from "./providers/WordProvider";

function App() {
  const handleResetStorage = () => {
    localStorage.removeItem("wordleGuesses");
    localStorage.removeItem("wordleGameOver");
    location.reload();
  };
  return (
    <WordProvider>
      <div className="app">
        <h1>Wordle TR</h1>
        <Wordle />
        <button className="reset-storage" onClick={handleResetStorage}>
          Reset
        </button>
      </div>
    </WordProvider>
  );
}

export default App;
