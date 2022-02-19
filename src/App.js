import "./App.css";
import Dictionary from "./Dictionary";
import Footer from "./Footer";

function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <h1>
          <i class="fa-solid fa-book"></i> Dictionary
        </h1>
      </header>
      <Dictionary word={"dictionary"} />
      <Footer />
    </div>
  );
}

export default App;
