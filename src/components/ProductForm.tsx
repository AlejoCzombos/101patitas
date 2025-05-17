import Input from "./Input";
import ColorInput from "./ColorInput";
import { colorList } from "@/data/colors";
import WaistSelect from "./WaistSelect";
import { CartProduct } from "@/store/Cart";
import { memo } from "react";

const ProductForm = memo(
  ({
    product,
    index,
    register,
    errors,
  }: {
    product: CartProduct;
    index: number;
    register: any;
    errors: any;
  }) => {
    console.log(product);
    return (
      <div className="flex flex-col gap-2 border p-5 rounded-xl border-gray-300 bg-white">
        {/* <h3 className="text-3xl font-bold text-primary-500">{product.name}</h3> */}
        <Input
          label="Nombre de la chapita"
          field="name"
          placeholder="Manchi"
          type="text"
          index={index}
          register={register}
          rules={{
            required: "El nombre es requerido",
            maxLength: {
              value: 15,
              message: "El nombre no puede tener más de 15 caracteres",
            },
          }}
          errors={errors}
        />
        <Input
          label="Teléfono"
          field="phone"
          placeholder="3624 123456"
          type="tel"
          index={index}
          register={register}
          rules={{
            required: "El teléfono es requerido",
            maxLength: {
              value: 10,
              message: "El teléfono no puede tener más de 10 caracteres",
            },
          }}
          errors={errors}
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
);

export default ProductForm;
