import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const slug = router.pathname;
  const parentRoute = "/" + slug.split("/")[1];
  const isAdmin = () => (parentRoute === "/admin" ? true : false);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (isAdmin() && !user) {
      router.replace(parentRoute);
    }
  }, [user]);

  return (
    <AnimatePresence mode="wait">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </AnimatePresence>
  );
}
