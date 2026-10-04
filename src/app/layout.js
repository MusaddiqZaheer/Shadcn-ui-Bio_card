import "./globals.css";

export const metadata = {
  title: "Bio Card",
  description: "Shadcn UI Bio Card Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}