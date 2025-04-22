import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>STRATA</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      </Head>
      <>{children}</>
    </>
  );
}
