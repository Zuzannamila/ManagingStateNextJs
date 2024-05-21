import Navbar from "@/components/Navbar";
import CartContext from "@/components/context/cartContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  type ItemState = {
    [key: string]: number;
  };
  const [items, setItems] = useState<ItemState>({});

  return (
    <CartContext.Provider value={{ items, setItems }}>
      <Navbar />
      <div className="w-9/12 m-auto pt-10">
        <Component {...pageProps} />
      </div>
    </CartContext.Provider>
  );
}
