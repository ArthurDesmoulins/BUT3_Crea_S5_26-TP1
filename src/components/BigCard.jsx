import AnimateNumber from "../assets/AnimateNumber.jsx";

function BigCard({
  color,
  platform,
  handle,
  value,
  label,
  todayValue,
  trend,
  unit,
}) {
  return (
    <div
      className={`bg-card-bg relative overflow-hidden rounded-lg px-6 pt-6 pb-8 text-center`}
    >
      <div className={`absolute inset-x-0 top-0 h-1 ${color}`} />
      <div className="mb-6 flex items-center justify-center gap-2">
        <img src={platform} alt="rien" className="h-5 w-5" />
        <p className="text-text-secondary text-sm font-bold">{handle}</p>
      </div>
      <p className="text-text-primary mb-2 text-5xl font-bold">
        <AnimateNumber value={value} /> {unit}
      </p>
      <p className="text-text-secondary text-xs tracking-[0.2em]">{label}</p>
      <div className="mt-4 flex items-center justify-center gap-1">
        <img
          src={`././images/icon-${trend}.svg`}
          alt="arrow"
          className="h-2 w-2"
        />
        <p
          className={`text-xs font-bold ${trend === "up" ? "text-green-500" : "text-red-500"}`}
        >
          {todayValue} Today
        </p>
      </div>
    </div>
  );
}

export default BigCard;
