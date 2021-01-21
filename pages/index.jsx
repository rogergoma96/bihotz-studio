import Head from "next/head";

import Animation from "../components/Animation";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

const Home = () => (
  <>
    <Head>
      <title>Bihotz Studio</title>
      <meta
        name="description"
        content="We design and develop brands, concepts and digital experiences than
            connect business to their audiences."
      />
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

export default Home;
