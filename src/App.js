import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
//here we are passing the props as title
function App() {
  return (
    <div className="App">
      <Navbar title="TextUtils" />
      <div className="container my-3">
        <TextForm heading="Enter the heading to analyse" />
      </div>
      <About />
    </div>
  );
}

export default App;
