import React from 'react';
import Main from "./components/Main";

function App() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center
    bg-gradient-to-br from-indigo-300 via-indigo-400 to-indigo-300
    dark:bg-gradient-to-br dark:from-indigo-950 dark:via-indigo-900 dark:to-indigo-950
    ">
      <Main />
    </div>
  );
}

export default App;
