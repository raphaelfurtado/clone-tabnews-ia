import { buscarTotalConteudos } from "../lib/tabnews";
import Confete from "./Confete";

export const dynamic = "force-dynamic";

const formatador = new Intl.NumberFormat("pt-BR");

export default async function Page() {
  const total = await buscarTotalConteudos();

  return (
    <main>
      <Confete />
      <h1>Em construção</h1>
      <p className="intro">
        Estamos neste exato momento reconstruindo o TabNews, um lugar na
        internet para quem trabalha com tecnologia e precisa consumir conteúdos
        com valor concreto.
      </p>
      {total === null ? (
        <p className="total-indisponivel">
          Não foi possível carregar o total de conteúdos agora.
        </p>
      ) : (
        <p className="total">
          <strong>{formatador.format(total)}</strong>
          <span>conteúdos publicados no TabNews</span>
        </p>
      )}
      <a className="link-oficial" href="https://www.tabnews.com.br">
        Acessar o site oficial do TabNews
      </a>
    </main>
  );
}
