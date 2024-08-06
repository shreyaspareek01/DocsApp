import React from "react";
import Background from "./components/Background";
import Foreground from "./components/Foreground";

function App() {
  return (
    <div className="relative w-full h-screen bg-zinc-800">
      <Background />
      <div className="fixed top-0 z-[3] w-full h-full"></div>
      <Foreground />
    </div>
  );
}

export default App;
