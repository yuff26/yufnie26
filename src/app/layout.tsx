import "./globals.css";

export const metadata = {
  title: "Yufsidi Portfolio",
  description: "Personal portfolio of Yufsidi",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
