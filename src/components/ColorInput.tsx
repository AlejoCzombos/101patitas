interface ColorInputProps {
  value: string;
  color: string;
  name: string;
}

export default function ColorInput({ value, color, name }: ColorInputProps) {
  const colorStyle = `bg-${color}-500 checked:bg-${color}-500 text-${color}-500`;

  return (
    <input
      type="radio"
      className={`size-10 border-none ${colorStyle} cursor-pointer`}
      name={name}
      value={value}
    />
  );
}
