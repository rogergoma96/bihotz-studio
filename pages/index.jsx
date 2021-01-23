import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

import Animation from "../components/Animation";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Bihotz Studio</title>
        <meta name="description" content={t("home:title")} />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/AnticDidone-Regular.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Header />
      <Animation />
      <Main />
      <Footer />
    </>
  );
};

export default Home;
