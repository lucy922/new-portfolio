import "./App.css";
import Home from "./components/Home";
import Main from "./components/Main";

function App() {
  return (
    <div className="h-screen">
      <div className="relative inset-0 h-full bg-[url('/public/assets/images/bg.jpg')] bg-cover bg-no-repeat">
        <div className="w-full h-full backdrop-brightness-50 fixed inset-0"></div>
        <Home />
      </div>
      <Main />
    </div>
  );
}

export default App;
