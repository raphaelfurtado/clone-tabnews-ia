import QRCode from "qrcode";
import { gerarPix } from "../lib/pix";
import Biscoito from "./Biscoito";

const PIX_CHAVE = "+5591980647336";
const PIX_NOME = "Fábio Raphael";
const PIX_CIDADE = "BRASIL";

export default async function Page() {
  const payload = gerarPix(PIX_CHAVE, PIX_NOME, PIX_CIDADE);
  const svg = await QRCode.toString(payload, {
    type: "svg",
    errorCorrectionLevel: "M",
    margin: 2,
  });

  return (
    <main>
      <h1>Biscoitinho da Sorte</h1>
      <p className="intro">
        O desafio é simples: clique no biscoito e descubra a mensagem que vai te
        dar força hoje.
      </p>
      <Biscoito
        payload={payload}
        nome={PIX_NOME}
        chave={PIX_CHAVE.replace("+55", "")}
        qr={`data:image/svg+xml,${encodeURIComponent(svg)}`}
      />
    </main>
  );
}
