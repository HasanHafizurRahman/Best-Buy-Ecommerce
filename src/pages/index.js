import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Productfeed from "../components/Productfeed";

export default function Home() {
  return (
    <div className="bg-yellow-100">
      <Head>
        <title>Best Buy</title>
      </Head>
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        {/* Banner  */}
        <Banner />
        {/* ProductFeed  */}
        <Productfeed />
      </main>
    </div>
  );
}
