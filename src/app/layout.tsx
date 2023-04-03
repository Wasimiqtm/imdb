import Provider from "./Provider";
import Header from "./components/Header";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "IMDB",
  description: "IMDB clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
          {/* header */}
          <Header></Header>

          {/* navbar */}
          <Navbar></Navbar>

          {/* search items */}
          {children}
        </Provider>
      </body>
    </html>
  );
}
