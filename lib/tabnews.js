const URL_CONTEUDOS =
  "https://www.tabnews.com.br/api/v1/contents?page=1&per_page=1&strategy=new";

export async function buscarTotalConteudos() {
  try {
    const resposta = await fetch(URL_CONTEUDOS, {
      cache: "no-store",
      signal: AbortSignal.timeout(5000),
    });
    if (!resposta.ok) return null;

    const cabecalho = resposta.headers.get("x-pagination-total-rows");
    if (cabecalho === null || cabecalho.trim() === "") return null;

    const total = Number(cabecalho);
    return Number.isSafeInteger(total) && total >= 0 ? total : null;
  } catch {
    return null;
  }
}
