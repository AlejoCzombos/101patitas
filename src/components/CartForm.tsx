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
          <ColorInput value="verde" color="green" name="backgroundColor" />
          <ColorInput value="azul" color="blue" name="backgroundColor" />
          <ColorInput value="rojo" color="red" name="backgroundColor" />
          <ColorInput value="amarillo" color="yellow" name="backgroundColor" />
          <ColorInput value="rosa" color="pink" name="backgroundColor" />
          <ColorInput value="naranja" color="orange" name="backgroundColor" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="frontColor">Color letras:</label>
        <div className="flex items-center gap-3">
          <ColorInput value="verde" color="green" name="frontColor" />
          <ColorInput value="azul" color="blue" name="frontColor" />
          <ColorInput value="rojo" color="red" name="frontColor" />
          <ColorInput value="amarillo" color="yellow" name="frontColor" />
          <ColorInput value="rosa" color="pink" name="frontColor" />
          <ColorInput value="naranja" color="orange" name="frontColor" />
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
