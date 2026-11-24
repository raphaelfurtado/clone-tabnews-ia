"use client";

import { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";

export default function Confete() {
  const [tamanho, setTamanho] = useState(null);
  const [concluido, setConcluido] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const medir = () =>
      setTamanho({ width: window.innerWidth, height: window.innerHeight });

    medir();
    window.addEventListener("resize", medir);
    return () => window.removeEventListener("resize", medir);
  }, []);

  if (!tamanho || concluido) return null;

  return (
    <div aria-hidden="true">
      <ReactConfetti
        width={tamanho.width}
        height={tamanho.height}
        numberOfPieces={280}
        recycle={false}
        style={{ position: "fixed", pointerEvents: "none" }}
        onConfettiComplete={() => setConcluido(true)}
      />
    </div>
  );
}
