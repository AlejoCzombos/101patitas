export default function WaistSelect({
  index,
  waist,
}: {
  index: number;
  waist?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={`waist-${index}`}>Talle:</label>
      <select
        className="w-40 rounded-xl text-center cursor-pointer"
        name={`waist-${index}`}
        id={`waist-${index}`}
        defaultValue={waist}
      >
        <option>S Gatito</option>
        <option>M Gatito</option>
        <option>S Perrito</option>
        <option>M Perrito</option>
        <option>L Perrito</option>
        <option>XL Perrito</option>
      </select>
    </div>
  );
}
