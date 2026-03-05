import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>STRATA</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <>{children}</>
    </>
  );
}
