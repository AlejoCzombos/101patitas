interface ColorInputProps {
  value: string;
  color: string;
  name: string;
}

export default function ColorInput({ value, color, name }: ColorInputProps) {
  return (
    <input
      type="radio"
      className={`size-10 border-none ${color} cursor-pointer`}
      name={name}
      value={value}
    />
  );
}
