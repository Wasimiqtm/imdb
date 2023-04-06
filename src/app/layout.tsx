import Provider from "./Provider";
import Header from "./components/Header";
import "./globals.css";
import Navbar from "./components/Navbar";
import SearchBox from "./components/SearchBox";

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
          <SearchBox></SearchBox>

          {children}
        </Provider>
      </body>
    </html>
  );
}
