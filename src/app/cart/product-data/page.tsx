import { api } from "@/api";
import ClientPage from "./page.client";
import { Order, Product } from "@/types";

export default async function Page() {
  const products: Product[] = await api.products.list();

  async function getPrice(name: string, products: Product[]) {
    "use server";
    return products.find((product) => product.name === name)?.price || 0;
  }

  async function createOrder(order: Order[]) {
    "use server";

    let message = "Hola, me gustaría hacer un pedido:\n\n";
    let total = 0;
    for (const item of order) {
      const price = await getPrice(item.model || "", products);
      console.log(item.model, price);
      message += `${item.model}\n`;
      message += `Nombre: ${item.name}\n`;
      message += `Teléfono: ${item.phone}\n`;
      message += `Color de fondo: ${item.backgroundColor}\n`;
      message += `Color letras: ${item.frontColor}\n`;
      message += `Talle: ${item.waist}\n`;
      message += `Precio: ${price}\n\n`;
      total += price;
    }

    message += `Total: $${total}`;

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = process.env.WHATSAPP_NUMBER;

    console.log(
      `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodedMessage}&type=phone_number&app_absent=0`
    );
  }

  return <ClientPage createOrder={createOrder} products={products} />;
}
