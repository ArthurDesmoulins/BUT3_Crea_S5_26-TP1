function Input({ active, onChange }) {
  return (
    <label className="relative inline-flex cursor-pointer items-center">
      <input
        type="checkbox"
        checked={active}
        onChange={onChange}
        className="peer sr-only"
      />
      <div className="peer-checked:from-primary peer-checked:to-secondary h-7 w-14 rounded-full bg-neutral-300 transition-colors duration-300 peer-checked:bg-gradient-to-r" />
      <div className="absolute top-1 right-1 h-5 w-5 rounded-full bg-white shadow-md transition-transform duration-300 peer-checked:-translate-x-7" />
    </label>
  );
}

export default Input;
