const campo = (id, valor) =>
  `${id}${String(valor.length).padStart(2, "0")}${valor}`;

const semAcento = (texto) =>
  texto.normalize("NFD").replace(/\p{M}/gu, "").toUpperCase();

function crc16(texto) {
  let crc = 0xffff;
  for (const byte of Buffer.from(texto)) {
    crc ^= byte << 8;
    for (let i = 0; i < 8; i++) {
      crc = (crc & 0x8000 ? (crc << 1) ^ 0x1021 : crc << 1) & 0xffff;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, "0");
}

export function gerarPix(chave, nome, cidade) {
  const payload =
    campo("00", "01") +
    campo("26", campo("00", "br.gov.bcb.pix") + campo("01", chave)) +
    campo("52", "0000") +
    campo("53", "986") +
    campo("58", "BR") +
    campo("59", semAcento(nome).slice(0, 25)) +
    campo("60", semAcento(cidade).slice(0, 15)) +
    campo("62", campo("05", "***")) +
    "6304";
  return payload + crc16(payload);
}
