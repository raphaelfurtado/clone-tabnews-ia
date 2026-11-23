"use client";

import { useEffect, useRef, useState } from "react";
import { FRASES } from "./frases";

const traco = { stroke: "#a9692a", strokeLinejoin: "round" };

export default function Biscoito({ payload, nome, chave, qr }) {
  const [frase, setFrase] = useState(null);
  const [mostrarPix, setMostrarPix] = useState(false);
  const [copiado, setCopiado] = useState(false);
  const ultima = useRef(null);
  const botao = useRef(null);

  useEffect(() => {
    if (!frase) return;
    const espera = setTimeout(() => setMostrarPix(true), 1400);
    return () => clearTimeout(espera);
  }, [frase]);

  function abrir() {
    const opcoes = FRASES.filter((item) => item !== ultima.current);
    ultima.current = opcoes[Math.floor(Math.random() * opcoes.length)];
    setFrase(ultima.current);
  }

  function reiniciar() {
    setFrase(null);
    setMostrarPix(false);
    setCopiado(false);
    requestAnimationFrame(() => botao.current?.focus());
  }

  async function copiar() {
    try {
      await navigator.clipboard.writeText(payload);
      setCopiado(true);
    } catch {
      window.prompt("Copie o código Pix:", payload);
    }
  }

  return (
    <>
      <button
        ref={botao}
        className={`biscoito${frase ? " aberto" : ""}`}
        type="button"
        aria-label="Abrir o biscoito da sorte"
        disabled={Boolean(frase)}
        onClick={abrir}
      >
        <svg viewBox="-20 -10 300 200" aria-hidden="true">
          <defs>
            <linearGradient id="massa" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#f6cf85" />
              <stop offset="0.6" stopColor="#e6a94f" />
              <stop offset="1" stopColor="#c98532" />
            </linearGradient>
          </defs>
          <g transform="rotate(-6 130 90)">
            <g className="metade direita">
              <path d="M128 34C176 26 226 52 250 104 232 112 206 128 176 150 168 118 150 76 128 34Z" fill="#d9963f" strokeWidth="3.5" {...traco} />
              <path d="M250 104C226 104 198 120 176 150 204 140 232 124 250 104Z" fill="#7a4a1e" strokeWidth="2" {...traco} />
              <g transform="rotate(32 204 130)">
                <rect x="204" y="121" width="74" height="18" fill="#fff" stroke="#d8c7b2" />
                <path d="M216 130h52" stroke="#c0392b" strokeWidth="2.5" strokeDasharray="7 4" />
              </g>
            </g>
            <g className="metade esquerda">
              <path d="M128 34C78 22 30 56 14 118 50 116 120 130 176 150 172 110 154 66 128 34Z" fill="url(#massa)" strokeWidth="3.5" {...traco} />
              <path d="M44 90C56 66 78 52 104 50" fill="none" stroke="#fff0cf" strokeWidth="5" strokeLinecap="round" opacity="0.75" />
            </g>
          </g>
        </svg>
      </button>

      <div aria-live="polite">{frase && <p className="frase">{frase}</p>}</div>

      {mostrarPix && (
        <section className="pix">
          <h2>Gostou? Me paga um cafezinho ☕</h2>
          <p>
            Escaneie o QR Code no app do seu banco.
            <br />
            Pix para {nome}, chave {chave}.
          </p>
          <img className="qr" src={qr} alt={`QR Code Pix para ${nome}`} />
          <div className="acoes">
            <button type="button" onClick={copiar}>
              {copiado ? "Código copiado!" : "Copiar código Pix"}
            </button>
            <button type="button" className="secundario" onClick={reiniciar}>
              Abrir outro biscoito
            </button>
          </div>
        </section>
      )}
    </>
  );
}
