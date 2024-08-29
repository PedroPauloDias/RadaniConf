"use client"

import { useRouter } from "next/navigation";
import useAuth from "./hooks/useAuth";

export default function AutenticationPage({
  children,
}: {
  children: React.ReactNode;
})
 {
  const router = useRouter();
  const { session } = useAuth();
  if (!session) {
    router.push("/login");
  }

  return (<>{children}</>);
}