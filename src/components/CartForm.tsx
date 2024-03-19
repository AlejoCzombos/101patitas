"use client";

import { FormEvent } from "react";
import ColorInput from "./ColorInput";
import Input from "./Input";

export default function CartForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(formData);
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 p-5">
      <Input
        label="Nombre de la chapita"
        id="name"
        placeholder="Manchi"
        type="text"
      />
      <Input label="Teléfono" id="phone" placeholder="3624 123456" type="tel" />
      <div className="flex flex-col gap-2">
        <label htmlFor="backgroundColor">Color fondo:</label>
        <div className="flex items-center gap-3">
          <ColorInput
            value="verde"
            color="bg-green-500 checked:bg-green-500 text-green-500"
            name="backgroundColor"
          />
          <ColorInput
            value="azul"
            color="bg-blue-500 checked:bg-blue-500 text-blue-500"
            name="backgroundColor"
          />
          <ColorInput
            value="rojo"
            color="bg-red-500 checked:bg-red-500 text-red-500"
            name="backgroundColor"
          />
          <ColorInput
            value="amarillo"
            color="bg-yellow-500 checked:bg-yellow-500 text-yellow-500"
            name="backgroundColor"
          />
          <ColorInput
            value="rosa"
            color="bg-pink-500 checked:bg-pink-500 text-pink-500"
            name="backgroundColor"
          />
          <ColorInput
            value="naranja"
            color="bg-orange-500 checked:bg-orange-500 text-orange-500"
            name="backgroundColor"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="frontColor">Color letras:</label>
        <div className="flex items-center gap-3">
          <ColorInput
            value="verde"
            color="bg-green-500 checked:bg-green-500 text-green-500"
            name="frontColor"
          />
          <ColorInput
            value="azul"
            color="bg-blue-500 checked:bg-blue-500 text-blue-500"
            name="frontColor"
          />
          <ColorInput
            value="rojo"
            color="bg-red-500 checked:bg-red-500 text-red-500"
            name="frontColor"
          />
          <ColorInput
            value="amarillo"
            color="bg-yellow-500 checked:bg-yellow-500 text-yellow-500"
            name="frontColor"
          />
          <ColorInput
            value="rosa"
            color="bg-pink-500 checked:bg-pink-500 text-pink-500"
            name="frontColor"
          />
          <ColorInput
            value="naranja"
            color="bg-orange-500 checked:bg-orange-500 text-orange-500"
            name="frontColor"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="waist">Talle:</label>
        <select
          className="w-40 rounded-xl text-center cursor-pointer"
          name="waist"
          id="waist"
        >
          <option>S</option>
          <option>M</option>
          <option>L</option>
          <option>XL</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-primary-500 text-white p-3 rounded-full hover:bg-primary-400 transition-all duration-300 ease-in-out font-bold text-xl"
      >
        Enviar
      </button>
    </form>
  );
}
