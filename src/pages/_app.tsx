import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="w-9/12 m-auto pt-10">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
