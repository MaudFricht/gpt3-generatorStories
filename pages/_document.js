/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="iyagi" key="title" />
        <meta
          property="og:description"
          content="iyagi - Générateur d'histoires pour enfants"
          key="description"
        />
        <meta
          name="keywords"
          content="histoire enfant, personnalisée, generateur"
        />
        <meta name="author" content="Maud Frichement" />


      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
