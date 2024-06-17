import "./App.css";
import Wordle from "./components/Wordle";
import WordProvider from "./providers/WordProvider";

function App() {
  return (
    <WordProvider>
      <div className="app">
        <h1>Wordle TR</h1>
        <Wordle />
      </div>
    </WordProvider>
  );
}

export default App;
