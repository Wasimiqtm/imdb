import { Inter } from "next/font/google";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className=" max-w-6xl mx-auto space-y-4">
      <h1 className=' text-2xl font-medium text-amber-600'>Home</h1>
    </div>
  );
}
