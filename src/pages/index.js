import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Productfeed from "../components/Productfeed";

export default function Home({ products }) {
  return (
    <div className="bg-yellow-100">
      <Head>
        <title>Best Buy</title>
        <link
          rel="icon"
          href="https://th.bing.com/th/id/R.cd8ab359687d2ffcfb15ab98b9741e77?rik=x1C8arpYwHojzg&riu=http%3a%2f%2fwww.360webdesigns.com%2fwp-content%2fuploads%2f2016%2f07%2fServices_ECommerce_v2-01.png&ehk=vsquP8MHRyjNt6y2np%2bpQ0s513Wp6pzBDUOnHjMl%2fbg%3d&risl=&pid=ImgRaw&r=0"
        />
      </Head>
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        {/* Banner  */}
        <Banner />
        {/* ProductFeed  */}
        <Productfeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (response) => response.json()
  );

  return {
    props: {
      products,
    },
  };
}
