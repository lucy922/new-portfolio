import "./App.css";
import Section from "./components/Section";
import Main from "./components/Main";
import Header from "./components/Header";

function App() {
  return (
    <div className="h-screen">
      <div className="relative inset-0 h-full bg-[url('/public/assets/images/bg.jpg')] bg-cover bg-no-repeat">
        <Header />
        <div className="w-full h-full backdrop-brightness-50 fixed inset-0"></div>
        <Section />
      </div>
      <Main />
    </div>
  );
}

export default App;
