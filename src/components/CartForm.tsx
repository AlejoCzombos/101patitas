export default function CartForm() {
  return (
    <form className="flex flex-col gap-5 p-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="nombre" className="text-lg">
          Nombre de la chapita:
        </label>
        <input
          type="text"
          id="nombre"
          placeholder="Nombre de la chapita"
          className="border border-gray-300 p-2 rounded-md"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="telefono" className="text-lg">
          Teléfono:
        </label>
        <input
          type="tel"
          id="telefono"
          placeholder="Teléfono"
          className="border border-gray-300 p-2 rounded-md"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="backgroundColor" className="text-sm">
          Color fondo:
        </label>
        <div className="flex items-center gap-3">
          <input
            type="radio"
            className="size-10 border-none checked:bg-green-500 bg-green-500 text-green-500"
            name="backgroundColor"
            value="verde"
          />
          <input
            type="radio"
            className="size-10 border-none checked:bg-blue-500 bg-blue-500 text-blue-500"
            name="backgroundColor"
            value="azul"
          />
          <input
            type="radio"
            className="size-10 border-none checked:bg-red-500 bg-red-500 text-red-500"
            name="backgroundColor"
            value="rojo"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="frontColor" className="text-sm">
          Color letras:
        </label>
        <div className="flex items-center gap-3">
          <input
            type="radio"
            className="size-10 border-none checked:bg-green-500 bg-green-500 text-green-500"
            name="frontColor"
            value="verde"
          />
          <input
            type="radio"
            className="size-10 border-none checked:bg-blue-500 bg-blue-500 text-blue-500"
            name="frontColor"
            value="azul"
          />
          <input
            type="radio"
            className="size-10 border-none checked:bg-red-500 bg-red-500 text-red-500"
            name="frontColor"
            value="rojo"
          />
        </div>
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
