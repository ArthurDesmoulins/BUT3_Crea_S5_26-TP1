import BigCard from "./BigCard.jsx";
import LittleCard from "./LittleCard.jsx";
import { bigCards, smallCards } from "../data/Cardsdata.js";

export default function CardsGrid() {
  return (
    <>
      <section className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {bigCards.map((card) => (
          <BigCard
            unit={card.unit}
            color={card.color}
            platform={card.platform}
            handle={card.handle}
            value={card.value}
            label={card.label}
            todayValue={card.todayValue}
            trend={card.trend}
          />
        ))}
      </section>

      <h2 className="text-text-secondary mb-4 font-semibold">
        Overview - Today
      </h2>

      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {smallCards.map((card) => (
          <LittleCard
            key={card.id}
            platform={card.platform}
            title={card.title}
            value={card.value}
            percentage={card.percentage}
            trend={card.trend}
          />
        ))}
      </section>
    </>
  );
}
