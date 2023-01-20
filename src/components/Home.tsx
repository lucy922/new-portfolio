import { useState } from "react";
import Header from "./Header";

function Home() {
  const [enabled, setEnabled] = useState(false);
  const handleClick = () => {
    setEnabled(true);
  };

  return (
    <div>
      <Header />
      <main className="mt-44 flex flex-col justify-center items-center max-w-md mx-auto">
        <h1>Hello,</h1>
        <h2>I'm Lucy Ofem</h2>
        <button
          onClick={handleClick}
          type="button"
          className=" border-2 border-white rounded-full py-2 px-4 mt-5"
        >
          About me
        </button>
        {enabled ? <div>hello world!</div> : null}
      </main>
    </div>
  );
}

export default Home;
