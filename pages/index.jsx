import Head from "next/head";

import Animation from "../components/Animation";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Links from "../components/Links";

import { breakpoints } from "../styles/theme";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bihotz Studio</title>
        <meta
          name="description"
          content="We design and develop brands, concepts and digital experiences than
            connect business to their audiences."
        ></meta>
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
      <main>
        <section>
          <h2>
            We design and develop brands, concepts and digital experiences than
            connect business to their audiences.
          </h2>
          <p>We are happy to meet you:</p>
          <a href="mailto:hello@bihotz-studio.com">hello@bihotz-studio.com</a>
          <a href="tel:+34697525425">+34 697 525 425</a>
          <p>Barcelona · Spain</p>
        </section>
        <Links />
      </main>
      <Footer />

      <style jsx>{`
        main {
          margin-left: 20%;
          min-height: calc(100vh - 30px);
          padding: 140px 56px 56px 120px;
        }

        section {
          display: flex;
          flex-direction: column;
        }

        h2 {
          font-size: 75px;
          font-weight: normal;
          letter-spacing: -2.5px;
          line-height: 80px;
          margin-bottom: 56px;
          margin-top: 0;
        }

        a,
        p {
          font-size: 40px;
          letter-spacing: -1px;
          line-height: 50px;
          margin: 0;
          padding: 0;
        }

        @media (max-width: ${breakpoints.tablet}) {
          main {
            padding: 128px 88px 40px 88px;
          }

          h2 {
            font-size: 65px;
            line-height: 70px;
          }

          a,
          p {
            font-size: 32px;
            letter-spacing: -1px;
            line-height: 40px;
          }
        }

        @media (max-width: ${breakpoints.mobile}) {
          main {
            padding: 88px 32px 38px;
          }

          h2 {
            font-size: 32px;
            line-height: 40px;
          }

          a,
          p {
            font-size: 18px;
            letter-spacing: -1px;
            line-height: 24px;
          }
        }
      `}</style>
    </>
  );
}
