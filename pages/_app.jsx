import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <AnimatePresence mode="wait">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </AnimatePresence>
  );
}
