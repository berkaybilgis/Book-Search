import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Search from "@/components/Search";
import Container from "@/components/Container";
import { SearchProvider } from "@/context/SearchContext";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <SearchProvider>
      <Header />
      <Search />
      <Container />
    </SearchProvider>
  );
}
