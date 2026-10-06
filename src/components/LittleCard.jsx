import AnimateNumber from "../assets/AnimateNumber.jsx";
function LittleCard({ platform, title, value, percentage, trend }) {
  return (
    <div className="bg-card-bg flex flex-col gap-6 rounded-lg p-6">
      <div className="flex items-center justify-between">
        <p className="text-text-secondary text-sm font-semibold">{title}</p>
        <img src={platform} alt="rien" className="h-5 w-5" />
      </div>
      <div className="flex items-end justify-between">
        <p className="text-text-primary text-3xl font-bold">
          <AnimateNumber value={value} />
        </p>
        <div className="flex flex-row gap-0.5">
          <img src={`././images/icon-${trend}.svg`} alt="arrow" />
          <p
            className={`text-xs font-bold ${trend === "up" ? "text-green-500" : "text-red-500"}`}
          >
            {percentage}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default LittleCard;
