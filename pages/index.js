import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductOverview from "../components/ProductOverview";
import Features from "../components/Features";
import FAQ from "../components/FAQ";
import EDMForm from "../components/EDMForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Markr | AI-Powered Assessment for Schools</title>
      </Head>
      <Header />
      <main>
        <Hero />
        <ProductOverview />
        <Features />
        <FAQ />
        <EDMForm />
      </main>
      <Footer />
    </>
  );
}
