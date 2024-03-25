import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="viteui-full viteui-grid viteui-min-h-screen viteui-place-content-center">
      <button
        onClick={() => setCount((count) => count + 1)}
        className="viteui-rounded-lg viteui-bg-slate-950 viteui-p-4 viteui-text-white"
      >
        count is {count}
      </button>
    </div>
  );
}

export default App;
