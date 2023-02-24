import { useRouter } from "next/router";
import { useEffect } from "react";

export default function AnySlug() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/admin");
  }, [router]);
}
