import { useState } from "react";
import CardsGrid from "./components/CardsGrid.jsx";
import Input from "./components/Input.jsx";
import "./index.css";

export default function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className={`${dark ? "dark" : ""} bg-bg-main min-h-screen`}>
      <div className="mx-auto max-w-6xl px-6 py-10">
        <header className="border-text-secondary/20 mb-12 flex items-center justify-between border-b pb-6">
          <div>
            <h1 className="text-text-primary text-xl font-bold">
              Social Media Dashboard
            </h1>
            <p className="text-text-secondary mt-1 text-sm">
              Total Followers: 23,004
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-text-secondary text-sm font-semibold">
              Dark Mode
            </span>
            <Input active={dark} onChange={() => setDark(!dark)} />
            <span className="text-text-secondary text-sm font-semibold">
              Light Mode
            </span>
          </div>
        </header>

        <CardsGrid />
      </div>
    </div>
  );
}
