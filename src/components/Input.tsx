interface InputProps {
  label: string;
  id: string;
  placeholder: string;
  type: string;
}

export default function Input({ label, id, placeholder, type }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id}>{label}:</label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        className="border border-gray-300 p-2 rounded-xl px-3"
      />
    </div>
  );
}
