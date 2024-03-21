import Input from "./Input";
import ColorInput from "./ColorInput";
import { colorList } from "@/data/colors";
import WaistSelect from "./WaistSelect";
import { CartProduct } from "@/store/Cart";

function ProductForm({
  product,
  index,
}: {
  product: CartProduct;
  index: number;
}) {
  return (
    <div
      key={product.name}
      className="flex flex-col gap-2 border p-5 rounded-xl border-gray-300 bg-white"
    >
      <h3 className="text-3xl font-bold text-primary-500">{product.name}</h3>
      <Input
        label="Nombre de la chapita"
        id={`name-${index}`}
        placeholder="Manchi"
        type="text"
      />
      <Input
        label="Teléfono"
        id={`phone-${index}`}
        placeholder="3624 123456"
        type="tel"
      />
      <div className="flex flex-col gap-2">
        <label htmlFor={`backgroundColor-${index}`}>Color fondo:</label>
        <div className="flex flex-wrap gap-3">
          {colorList.map((color) => (
            <ColorInput
              key={color.name}
              value={color.name}
              color={color.color}
              name={`backgroundColor-${index}`}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor={`frontColor-${index}`}>Color letras:</label>
        <div className="flex flex-wrap gap-3">
          {colorList.map((color) => (
            <ColorInput
              key={color.name}
              value={color.name}
              color={color.color}
              name={`frontColor-${index}`}
            />
          ))}
        </div>
      </div>
      <WaistSelect index={index} />
    </div>
  );
}

export default ProductForm;
