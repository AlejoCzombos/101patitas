interface ColorInputProps {
  value: string;
  color: string;
  name: string;
}

export const colorClasses = {
  green: "bg-green-500 checked:bg-green-500 text-green-500",
  blue: "bg-blue-500 checked:bg-blue-500 text-blue-500",
  red: "bg-red-500 checked:bg-red-500 text-red-500",
  yellow: "bg-yellow-500 checked:bg-yellow-500 text-yellow-500",
  pink: "bg-pink-500 checked:bg-pink-500 text-pink-500",
  orange: "bg-orange-500 checked:bg-orange-500 text-orange-500",
};

export default function ColorInput({ value, color, name }: ColorInputProps) {
  const colorStyle = colorClasses[color as keyof typeof colorClasses] || "";
  return (
    <input
      type="radio"
      className={`size-10 border-none ${colorStyle} cursor-pointer`}
      name={name}
      value={value}
    />
  );
}
