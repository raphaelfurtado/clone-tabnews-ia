import "./globals.css";

export const metadata = { title: "Biscoitinho da Sorte" };

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
