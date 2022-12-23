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


<meta name="description" content="iyagi - Générateur d'histoires pour enfants"/>

<meta itemprop="name" content="iyagi"/>
<meta itemprop="description" content="iyagi - Générateur d'histoires pour enfants"/>
<meta itemprop="image" content="https://zupimages.net/viewer.php?id=22/51/teag.png"/>

<meta property="og:url" content="https://www.iyagi.xyz"/>
<meta property="og:type" content="website"/>
<meta property="og:title" content="iyagi"/>
<meta property="og:description" content="iyagi - Générateur d'histoires pour enfants"/>
<meta property="og:image" content="https://zupimages.net/viewer.php?id=22/51/teag.png"/>

<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="iyagi"/>
<meta name="twitter:description" content="iyagi - Générateur d'histoires pour enfants"/>
<meta name="twitter:image" content="https://zupimages.net/viewer.php?id=22/51/teag.png"/>

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
