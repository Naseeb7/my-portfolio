// ClientBackButton.tsx
"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ClientBackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        if (window.history.length > 1) {
          router.back();
        } else {
          router.push("/");
        }
      }}
      className="hover:cursor-pointer"
    >
      <Image src="/icons/crossIcon.svg" alt="Back" width={32} height={32} />
    </button>
  );
}
