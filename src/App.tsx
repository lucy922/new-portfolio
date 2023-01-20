import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <div className="relative">
      <div className="absolute h-screen inset-0 bg-[url('/public/assets/images/bg.jpg')] bg-cover bg-no-repeat">
        <div className="w-full h-full backdrop-brightness-50">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
