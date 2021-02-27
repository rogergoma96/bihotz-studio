import Head from "next/head";
import { useTranslate } from "../hooks/useTranslate/useTranslate";

import Animation from "../components/Animation/Animation";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";

const Home = () => {
  const labels = useTranslate();

  return (
    <>
      <Head>
        <title>Bihotz Studio</title>
        <meta name="description" content={labels.title} />
        <meta name="theme-color" content="#E64E15" />
        <link rel="canonical" href="https://bihotz-studio.com" />
        <link
          rel="alternate"
          href="https://bihotz-studio.com/"
          hrefLang="x-default"
        />
        <link
          rel="alternate"
          href="https://bihotz-studio.com/es"
          hrefLang="es"
        />
        <link
          rel="alternate"
          href="https://bihotz-studio.com/ca"
          hrefLang="ca"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/AnticDidone-Regular.woff2"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Header />
      <Animation />
      <Main labels={labels} />
      <Footer />
    </>
  );
};

export default Home;
