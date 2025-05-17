interface InputProps {
  label: string;
  field: string;
  placeholder: string;
  type: string;
  errors: any;
  register: any;
  index: number;
  rules: any;
}

export default function Input({
  label,
  field,
  placeholder,
  type,
  errors,
  register,
  index,
  rules,
}: InputProps) {
  const id = `products.${index}.${field}`;
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id}>{label}:</label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        {...register(id, rules)}
        className="border border-gray-300 p-2 rounded-xl px-3"
      />
      {errors.products?.[index]?.[field] && (
        <span className="text-red-500 text-lg lg:text-sm">
          {errors.products?.[index]?.[field].message}
        </span>
      )}
    </div>
  );
}
